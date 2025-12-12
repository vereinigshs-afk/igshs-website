import { describe, it, expect, vi, beforeEach } from "vitest";
import { uploadRouter } from "./routers/upload";
import * as storage from "./storage";

// Mock storage module
vi.mock("./storage", () => ({
  storagePut: vi.fn(),
}));

describe("Upload Router", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should upload a valid image file", async () => {
    const mockFile = {
      fileName: "test-image.jpg",
      fileType: "image/jpeg",
      fileData: Buffer.from("fake image data").toString("base64"),
    };

    vi.mocked(storage.storagePut).mockResolvedValue({
      url: "https://example.com/uploads/123-test-image.jpg",
      key: "uploads/123-test-image.jpg",
    });

    const caller = uploadRouter.createCaller({} as any);
    const result = await caller.uploadFile(mockFile);

    expect(result.success).toBe(true);
    expect(result.url).toContain("test-image.jpg");
    expect(result.fileName).toBe("test-image.jpg");
  });

  it("should upload a valid PDF file", async () => {
    const mockFile = {
      fileName: "document.pdf",
      fileType: "application/pdf",
      fileData: Buffer.from("fake pdf data").toString("base64"),
    };

    vi.mocked(storage.storagePut).mockResolvedValue({
      url: "https://example.com/uploads/123-document.pdf",
      key: "uploads/123-document.pdf",
    });

    const caller = uploadRouter.createCaller({} as any);
    const result = await caller.uploadFile(mockFile);

    expect(result.success).toBe(true);
    expect(result.url).toContain("document.pdf");
  });

  it("should reject invalid file type", async () => {
    const mockFile = {
      fileName: "script.exe",
      fileType: "application/x-msdownload",
      fileData: Buffer.from("fake exe data").toString("base64"),
    };

    const caller = uploadRouter.createCaller({} as any);

    await expect(caller.uploadFile(mockFile)).rejects.toThrow(
      "Ungültiger Dateityp"
    );
  });

  it("should reject file larger than 10MB", async () => {
    // Create a buffer larger than 10MB
    const largeBuffer = Buffer.alloc(11 * 1024 * 1024);
    const mockFile = {
      fileName: "large-image.jpg",
      fileType: "image/jpeg",
      fileData: largeBuffer.toString("base64"),
    };

    const caller = uploadRouter.createCaller({} as any);

    await expect(caller.uploadFile(mockFile)).rejects.toThrow(
      "Datei ist zu groß"
    );
  });

  it("should sanitize file names with special characters", async () => {
    const mockFile = {
      fileName: "test file!@#$%^&*().jpg",
      fileType: "image/jpeg",
      fileData: Buffer.from("fake image data").toString("base64"),
    };

    vi.mocked(storage.storagePut).mockResolvedValue({
      url: "https://example.com/uploads/123-test_file__________.jpg",
      key: "uploads/123-test_file__________.jpg",
    });

    const caller = uploadRouter.createCaller({} as any);
    const result = await caller.uploadFile(mockFile);

    expect(result.fileName).toBe("test_file__________.jpg");
  });
});

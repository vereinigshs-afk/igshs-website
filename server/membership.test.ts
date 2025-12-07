import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import * as db from "./db";
import * as notification from "./_core/notification";

// Mock the database functions
vi.mock("./db", () => ({
  createMembershipApplication: vi.fn(),
  getAllMembershipApplications: vi.fn(),
  getDb: vi.fn(),
  upsertUser: vi.fn(),
  getUserByOpenId: vi.fn(),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(),
}));

function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("membership.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should successfully submit a membership application", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    // Mock successful database insertion
    vi.mocked(db.createMembershipApplication).mockResolvedValue({
      insertId: 1,
      affectedRows: 1,
    } as any);

    // Mock successful notification
    vi.mocked(notification.notifyOwner).mockResolvedValue(true);

    const input = {
      firstName: "Max",
      lastName: "Muster",
      address: "Teststrasse 123\n3098 Schliern",
      email: "max.muster@example.com",
    };

    const result = await caller.membership.submit(input);

    expect(result.success).toBe(true);
    expect(result.notificationSent).toBe(true);
    expect(db.createMembershipApplication).toHaveBeenCalledWith(input);
    expect(notification.notifyOwner).toHaveBeenCalledWith({
      title: "Neue Mitgliedschafts-Anmeldung",
      content: expect.stringContaining("Max Muster"),
    });
  });

  it("should reject invalid email addresses", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const input = {
      firstName: "Max",
      lastName: "Muster",
      address: "Teststrasse 123",
      email: "invalid-email",
    };

    await expect(caller.membership.submit(input)).rejects.toThrow();
  });

  it("should reject empty required fields", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const input = {
      firstName: "",
      lastName: "Muster",
      address: "Teststrasse 123",
      email: "max@example.com",
    };

    await expect(caller.membership.submit(input)).rejects.toThrow();
  });
});

describe("membership.list", () => {
  it("should return all membership applications", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const mockApplications = [
      {
        id: 1,
        firstName: "Max",
        lastName: "Muster",
        address: "Teststrasse 123",
        email: "max@example.com",
        status: "pending" as const,
        createdAt: new Date(),
        processedAt: null,
      },
    ];

    vi.mocked(db.getAllMembershipApplications).mockResolvedValue(
      mockApplications
    );

    const result = await caller.membership.list();

    expect(result).toEqual(mockApplications);
    expect(db.getAllMembershipApplications).toHaveBeenCalled();
  });
});

import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";
import { storagePut } from "../storage";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const ALLOWED_FILE_TYPES = [
  // Images
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
  // PDFs
  "application/pdf",
];

export const uploadRouter = router({
  uploadFile: publicProcedure
    .input(
      z.object({
        fileName: z.string(),
        fileType: z.string(),
        fileData: z.string(), // Base64 encoded file data
      })
    )
    .mutation(async ({ input }) => {
      const { fileName, fileType, fileData } = input;

      // Validate file type
      if (!ALLOWED_FILE_TYPES.includes(fileType)) {
        throw new Error(
          "Ungültiger Dateityp. Nur Bilder (JPEG, PNG, GIF, WebP) und PDFs sind erlaubt."
        );
      }

      // Decode base64 and check file size
      const buffer = Buffer.from(fileData, "base64");
      if (buffer.length > MAX_FILE_SIZE) {
        throw new Error(
          "Datei ist zu groß. Maximale Dateigröße ist 10MB."
        );
      }

      // Generate unique file name
      const timestamp = Date.now();
      const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
      const uniqueFileName = `uploads/${timestamp}-${sanitizedFileName}`;

      // Upload to S3
      const result = await storagePut(uniqueFileName, buffer, fileType);

      return {
        success: true,
        url: result.url,
        key: result.key,
        fileName: sanitizedFileName,
      };
    }),
});

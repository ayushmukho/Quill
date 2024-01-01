/**
 * @link https://trpc.io/docs/client/nextjs/setup
 * main app router
 **/
import { privateProcedure, publicProcedure, router } from "../trpc";
import { z } from "zod";
import { authCallbackRoute } from "./authCallbackRoute";
import { deleteFileRoute } from "./deleteFileRoute";
import { getUserFilesRoute } from "./getUserFilesRoute";
import { getFileRoute } from "./getFileRoute";
import { getFileUploadStatusRoute } from "./getFileUploadStatusRoute";

export const appRouter = router({
  authCallback: publicProcedure.query(authCallbackRoute),
  getUserFiles: privateProcedure.query(getUserFilesRoute),
  getFile: privateProcedure
    .input(z.object({ key: z.string() }))
    .mutation(getFileRoute),
  getFileUploadStatus: privateProcedure
    .input(z.object({ fileId: z.string() }))
    .query(getFileUploadStatusRoute),
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(deleteFileRoute),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

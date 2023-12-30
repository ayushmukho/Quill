/**
 * @link https://trpc.io/docs/client/nextjs/setup
 * main app router
 **/
import { privateProcedure, publicProcedure, router } from "../trpc";
import { authCallbackRoute } from "./authCallbackRoute";
import { getUserFilesRoute } from "./getUserFilesRoute";

export const appRouter = router({
  authCallback: publicProcedure.query(authCallbackRoute),
  getUserFiles: privateProcedure.query(getUserFilesRoute),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

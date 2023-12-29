/**
 * @link https://trpc.io/docs/client/nextjs/setup
 * main app router
 **/
import { publicProcedure, router } from "../trpc";
import { authCallbackRoute } from "./authCallbackRoute";
export const appRouter = router({
  authCallback: publicProcedure.query(authCallbackRoute),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

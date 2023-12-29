/**
 * @link https://trpc.io/docs/client/nextjs/setup
 * main app router
 **/
import { publicProcedure, router } from "../trpc";
export const appRouter = router({
  test: publicProcedure.query(() => {
    return "Hello";
  }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;

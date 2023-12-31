/**
 * @link https://docs.uploadthing.com/getting-started/appdir
 * procedure helpers
 **/
import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});

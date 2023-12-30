import { db } from "@/database";

interface ctx {
  userId: string;
  user: any;
}
export const getUserFilesRoute = async ({ ctx }: { ctx: ctx }) => {
  try {
    const { userId } = ctx;
    return await db.file.findMany({
      where: {
        userId,
      },
    });
  } catch (error) {
    console.log("ERROR in getUserfile ", error);
  }
};

import { db } from "@/database";
import { TRPCError } from "@trpc/server";

interface ctx {
  userId: string;
  user: any;
}
interface input {
  id: string;
}
export const deleteFileRoute = async ({
  ctx,
  input,
}: {
  ctx: ctx;
  input: input;
}) => {
  try {
    const { userId } = ctx;
    const file = await db.file.findFirst({
      where: {
        id: input.id,
        userId,
      },
    });

    if (!file) throw new TRPCError({ code: "NOT_FOUND" });

    await db.file.delete({
      where: {
        id: input.id,
      },
    });
    return file;
  } catch (error) {
    console.log("ERROR in deleteFileRoute ", error);
  }
};

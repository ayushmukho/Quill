import { db } from "@/database";
import { TRPCError } from "@trpc/server";

interface ctx {
  userId: string;
  user: any;
}
interface input {
  key: string;
}
export const getFileRoute = async ({
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
        key: input.key,
        userId,
      },
    });

    if (!file) throw new TRPCError({ code: "NOT_FOUND" });

    return file;
  } catch (error) {
    console.log("ERROR in getFileRoute ", error);
    return { id: "" };
  }
};

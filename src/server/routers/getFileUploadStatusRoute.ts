import { db } from "@/database";
import { TRPCError } from "@trpc/server";

interface ctx {
  userId: string;
  user: any;
}
interface input {
  fileId: string;
}
export const getFileUploadStatusRoute = async ({
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
        id: input.fileId,
        userId,
      },
    });
    if (!file) return { status: "PENDING" as const };

    return { status: file.uploadStatus };
  } catch (error) {
    console.log("ERROR in deleteFileRoute ", error);
    return { status: "FAILED" as const };
  }
};

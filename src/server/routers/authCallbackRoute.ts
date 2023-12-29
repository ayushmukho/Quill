import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError } from "@trpc/server";

interface User {
  family_name: string;
  given_name: string;
  picture: null;
  email: string;
  id: string;
}

export const authCallbackRoute = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const user: User | any = await getUser();

    if (!user.id || !user.email) throw new TRPCError({ code: "UNAUTHORIZED" });

    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true };
  } catch (error) {
    console.log("Error in authCallback with ", error);
    return { success: false };
  }
};

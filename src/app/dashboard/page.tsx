import Dashboard from "@/components/Dashboard";
import { db } from "@/database";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

interface User {
  family_name: string;
  given_name: string;
  picture: null;
  email: string;
  id: string;
}

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user: User | any = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return <Dashboard />;
};

export default Page;

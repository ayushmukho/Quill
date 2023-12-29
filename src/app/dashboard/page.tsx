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

  return <div>{user.email}</div>;
};

export default Page;

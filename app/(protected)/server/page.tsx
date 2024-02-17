import { auth } from "@/auth";
import UserInfo from "@/components/user-info";
import { currentUser } from "@/lib/auth";

type ServerPageProps = {};

const ServerPage = async (props: ServerPageProps) => {
  const user = await currentUser();
  return <UserInfo user={user} label="💻 Server Component" />;
};

export default ServerPage;

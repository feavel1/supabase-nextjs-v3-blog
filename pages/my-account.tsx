import { useUser } from "@supabase/auth-helpers-react";
import Auth from "../components/ui/Auth";
import Account from "../components/Account";
import Link from "next/link";

export default function MyAccount() {
  const user = useUser();

  return (
    <>
      {user ? (
        <div className="grid grid-cols-3 gap-3">
          <Account />
          <div className="col-span-2 bg-slate-200 text-black pt-5 pb-12 sm:px-12 px-5 rounded-2xl text-center shadow-xl">
            <h1 className="text-3xl font-bold mb-5">菜单</h1>
            <div className="mb-5 w-fit mx-auto">
              <Link href="/createPost">
                <div className="btn--primary btn p-3">创建帖子</div>
              </Link>
            </div>

            <h1 className="text-3xl font-bold myy s-5">账户状态</h1>
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
}

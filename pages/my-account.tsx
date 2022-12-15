import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import Auth from "../components/ui/Auth";

export default function MyAccount() {
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  function signOutUser() {
    supabaseClient.auth.signOut();
  }

  return (
    <>
      {user ? (
        <>
          <Link href="/create-post">推荐一下</Link>
          <button onClick={() => signOutUser()}>Sign out</button>
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

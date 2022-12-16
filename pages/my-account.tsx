import { useUser } from "@supabase/auth-helpers-react";
import Auth from "../components/ui/Auth";
import Account from "../components/Account";

export default function MyAccount() {
  const user = useUser();

  return (
    <>
      {user ? (
        <>
          <Account />
        </>
      ) : (
        <Auth />
      )}
    </>
  );
}

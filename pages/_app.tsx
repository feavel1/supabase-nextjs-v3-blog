import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider, Session } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Nav from "../components/ui/Nav";

// Providers (providing Supabase, ui layout, nav-bar)

function MyApp({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <div className="bg-zinc-800 text-white min-h-screen">
        <Nav />
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <Component {...pageProps} />
        </div>
      </div>
    </SessionContextProvider>
  );
}
export default MyApp;

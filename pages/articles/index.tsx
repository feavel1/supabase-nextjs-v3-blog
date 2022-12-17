import type { NextPage } from "next";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

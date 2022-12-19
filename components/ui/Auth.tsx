import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Link from "next/link";
import { useState } from "react";

export default function Auth() {
  const supabase = useSupabaseClient();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email: string) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      alert("Check your email for the login link! 快去看你的邮箱吧！");
    } catch (error: any) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card card--primary mt-5">
      <div>
        <h1 className="text-3xl font-bold text-center my-5">登录📮🪄🔗</h1>
        <p className="text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide ">
          使用邮箱魔术链接登录
        </p>
      </div>
      <div className="space-y-4">
        <input
          type="email"
          placeholder="输入邮箱地址"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
        />
      </div>
      <div className="text-center mt-6">
        <button
          className="btn btn--primary"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(email);
          }}
          disabled={loading}
        >
          <span>{loading ? "加载中..." : "登录"}</span>
        </button>
      </div>

      <div className="text-center mt-6">
        <Link href="/">
          <button className="btn btn--secondary">
            <span>⬅️首页</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

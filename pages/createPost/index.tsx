import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function CreatPost() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const initialState = {
    title: "",
    content: "",
  };

  const [articleData, setArticleData] = useState(initialState);

  const handleChange = (e: any) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  async function createArticle() {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .insert([
          {
            title: articleData.title,
            content: articleData.content,
            user_email: user?.email?.toLowerCase(),
            user_id: user?.id,
          },
        ])
        .single();
      if (error) throw error;
      setArticleData(initialState);
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="grid w-screen p-5 md:w-96 gap-3">
      <h1 className="text-3xl">标题</h1>

      <label className="relative block">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-gray-600 w-full border border-slate-500 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Your Title"
          type="text"
          name="title"
          onChange={handleChange}
        />
      </label>
      <h1 className="text-3xl">你的想法</h1>

      <label className="">
        <textarea
          className="placeholder:italic placeholder:text-slate-400 h-24 bg-gray-600 w-full border border-slate-500 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Your Text"
          name="content"
          onChange={handleChange}
        />
      </label>
      <div>
        <button className="btn--third btn" onClick={() => createArticle()}>
          创建帖子
        </button>
      </div>
      <div className="text-xs">
        正在使用 <span className="underline">{user?.email}</span> 的身份发布
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

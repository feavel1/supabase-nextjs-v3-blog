import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

export default function EditPost() {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const user = useUser();
  const [article, setArticle] = useState<any>({});
  const { id } = router.query;
  const initialState = {
    title: article.title,
    content: article.content,
  };
  const [articleData, setArticleData] = useState(initialState);

  const handleChange = (e: any) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    async function getArticle() {
      const { data, error } = await supabaseClient
        .from("articles")
        .select("*")
        .filter("id", "eq", id)
        .single();
      if (error) {
        console.log(error);
      } else {
        setArticle(data);
      }
    }
    if (typeof id !== "undefined") {
      getArticle();
    }
  }, [id]);

  async function editArticle() {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .update([
          {
            title: articleData.title,
            content: articleData.content,
          },
        ])
        .eq("id", id);
      if (error) throw error;
      setArticleData(initialState);
      router.push("/posts?id=" + id);
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
          placeholder={article.title}
          type="text"
          name="title"
          onChange={handleChange}
        />
      </label>
      <h1 className="text-3xl">你的想法</h1>

      <label className="">
        <textarea
          className="placeholder:italic placeholder:text-slate-400 h-24 bg-gray-600 w-full border border-slate-500 rounded-md py-2 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder={article.content}
          name="content"
          onChange={handleChange}
        />
      </label>
      <div>
        <button className="btn--third btn" onClick={() => editArticle()}>
          保存编辑
        </button>
      </div>
      <div>
        <button
          className="btn--third btn"
          onClick={() => router.push("/posts?id=" + id)}
        >
          返回
        </button>
      </div>
      <div className="text-xs">
        正在使用 <span className="underline">{user?.email}</span> 的身份编辑
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuth({ redirectTo: "/login" });

import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Articles() {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const router = useRouter();
  const [article, setArticle] = useState<any>({});
  const { id } = router.query;

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

  const deleteArticle = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("articles")
        .delete()
        .eq("id", id);
      if (error) throw error;
      router.push("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="w-full max-w-3xl p-2">
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm font-bold mb-2">
        作者：{article.user_email?.toLowerCase()}
      </p>
      <div className="p-3 bg-slate-200 rounded-lg text-black whitespace-pre-wrap">
        <>{article.content}</>
      </div>
      {user && article.user_id === user.id ? (
        <div className="mt-5 space-y-1 w-24 mb-5 ">
          <button
            className="btn btn--primary"
            onClick={() => router.push("/editPost?id=" + id)}
          >
            Edit
          </button>
          <button
            className="btn btn--secondary"
            onClick={() => deleteArticle()}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
}

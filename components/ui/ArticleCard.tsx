import { useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

export default function ArticleCard(props: { article: any }) {
  const router = useRouter();
  const { article } = props;

  function getDate() {
    // dd--mm--yyyy
    let time = Date.parse(article.inserted_at);
    let date = new Date(time);
    return date.getDay() + "-" + date.getMonth() + "-" + date.getFullYear();
  }

  return (
    <div
      onClick={() => router.push("/article?id=" + article.id)}
      className="mb-2 bg-neutral-500 w-full max-w-3xl p-2 rounded-lg hover:bg-neutral-600 transition ease-in-out delay-100"
    >
      <h1 className="text-3xl mb-1">{article.title}</h1>
      <span className="text-sm">日期: {getDate()}</span>
      <p className="text-sm">作者: {article.user_email.toLowerCase()}</p>
    </div>
  );
}

import { useRouter } from "next/router";

export default function ArticleCard(props: { article: any }) {
  const router = useRouter();
  const { article } = props;

  function getDate() {
    // dd--mm--yyyy
    let time = Date.parse(article.inserted_at);
    let date = new Date(time);
    return date.toISOString().slice(0, 10);
  }

  return (
    <div
      onClick={() => router.push("/posts?id=" + article.id)}
      className="bg-neutral-500 p-3 rounded-lg shadow-lg hover:bg-neutral-600 transition ease-in-out delay-100 pr-8"
    >
      <h1 className="text-xl mb-1 truncate">{article.title}</h1>
      <p className="text-sm">日期: {getDate()}</p>
      <p className="text-sm">作者: {article.user_email.toLowerCase()}</p>
    </div>
  );
}

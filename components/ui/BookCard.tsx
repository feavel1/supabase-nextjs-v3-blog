import { useRouter } from "next/router";

export default function BookCard(props: { article: any }) {
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
      className="bg-zinc-500 p-3 rounded-sm shadow-lg hover:bg-zinc-600 transition ease-in-out delay-100 pr-8"
    >
      <h1 className="text-xl mb-1 truncate">{article.title}</h1>
      <p className="text-sm">
        <span className="text-neutral-300">日期:</span> {getDate()}
      </p>
      <p className="text-sm">
        <span className="text-neutral-300">作者: </span>
        {article.user_email.toLowerCase()}
      </p>
    </div>
  );
}

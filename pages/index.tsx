import Articles from "../components/Articles";
import Link from "next/link";
import Books from "../components/Books";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-lg mb-3">
        <h1 className="text-3xl">黄金蜘蛛网🕸️ & 外星世界🛸</h1>
        <p>欢迎来您到黄金蜘蛛网&外星世界主页</p>
      </div>
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="text-3xl font-bold">最新帖子🆕</div>
        <div className="w-fit">
          <Link href="/posts/createPost">
            <div className="text-neutral-900 bg-neutral-100 hover:bg-neutral-400 transition ease-in-out delay-100 btn">
              创建帖子
            </div>
          </Link>
        </div>
      </div>
      <Articles />
      <h1 className="text-3xl font-bold my-5">推荐阅读📖</h1>
      <Books />
    </div>
  );
}

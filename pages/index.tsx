import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-lg mb-3">
        <h1 className="text-3xl">黄金蜘蛛网🕸️ & 外星世界🛸</h1>
        <p>欢迎来您到黄金蜘蛛网&外星世界主页</p>
      </div>
      <h1 className="text-3xl font-bold mb-5">最新帖子🆕</h1>
      <Articles />
      <h1 className="text-3xl font-bold my-5">推荐阅读📖</h1>
    </div>
  );
}

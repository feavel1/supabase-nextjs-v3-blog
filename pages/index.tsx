import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <>
      <div className="bg-neutral-800 rounded-lg max-w-3xl w-full p-3 mb-3">
        <a className="" href="">
          <h1 className="text-3xl">黄金蜘蛛网🕸️ & 外星世界🛸</h1>
          <p>欢迎来您到主页</p>
        </a>
      </div>
      <Articles />
    </>
  );
}

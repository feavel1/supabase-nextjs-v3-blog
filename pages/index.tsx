import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";

export default function Home() {
  return (
    <>
      <div className="bg-purple-400 rounded-lg max-w-3xl w-full p-3 mb-3">
        <a className="" href="">
          <h1 className="text-3xl">阅读推荐 by Baby Feavel</h1>
          <p>欢迎来到主页</p>
        </a>
      </div>
      <Articles />
    </>
  );
}

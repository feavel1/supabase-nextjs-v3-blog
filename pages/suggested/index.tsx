import Articles from "../posts";
import Link from "next/link";
import Books from "../../components/Books";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="">
          <h1 className="text-3xl font-bold">推荐阅读📚🆕</h1>
          <p>这里可以查看阅读资料</p>
        </div>
        <div className="w-fit">
          <Link href="/posts/createPost">
            <div className="text-neutral-900 bg-neutral-100 hover:bg-neutral-400 transition ease-in-out delay-100 btn">
              分享一本书
            </div>
          </Link>
        </div>
      </div>

      <Books />
    </div>
  );
}

import Articles from "../posts";
import Link from "next/link";
import Books from "../../components/Books";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex flex-row justify-between items-center mb-5">
        <div className="">
          <h1 className="text-3xl font-bold">ζ¨θιθ―»ππ</h1>
          <p>θΏιε―δ»₯ζ₯ηιθ―»θ΅ζ</p>
        </div>
        <div className="w-fit">
          <Link href="/posts/createPost">
            <div className="text-neutral-900 bg-neutral-100 hover:bg-neutral-400 transition ease-in-out delay-100 btn">
              εδΊ«δΈζ¬δΉ¦
            </div>
          </Link>
        </div>
      </div>

      <Books />
    </div>
  );
}

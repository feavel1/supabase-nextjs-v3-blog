import Footer from "../components/ui/Footer";
import TechUsed from "../components/ui/TechUsed";

export default function About() {
  return (
    <div className="text-center mt-5">
      <div className="text-xs uppercase  text-center font-bold mb-10">
        本网站纯教育用途
        <br />
        如有侵权或违规内容
        <br />
        请及时联系作者
      </div>
      <div>
        <p className="mt-14 text-xs uppercase text-white text-center font-bold tracking-[0.3em]">
          made possible by
        </p>
        <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-6">
          <div className="flex items-center justify-start">
            <a href="https://nextjs.org" aria-label="Next.js Link">
              <img
                src="/nextjs.svg"
                alt="Next.js Logo"
                className="h-12 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://vercel.com" aria-label="Vercel.com Link">
              <img
                src="/vercel.svg"
                alt="Vercel.com Logo"
                className="h-6 text-white"
              />{" "}
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://stripe.com" aria-label="stripe.com Link">
              <img
                src="/stripe.svg"
                alt="stripe.com Logo"
                className="h-12 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://supabase.io" aria-label="supabase.io Link">
              <img
                src="/supabase.svg"
                alt="supabase.io Logo"
                className="h-10 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://github.com" aria-label="github.com Link">
              <img
                src="/github.svg"
                alt="github.com Logo"
                className="h-8 text-white"
              />
            </a>
          </div>
          <div className="flex items-center justify-start">
            <a href="https://tailwindcss.com" aria-label="tailwindcss Link">
              <img
                src="/tailwindcss-logotype-white.svg"
                alt="github.com Logo"
                className="h-8 text-white"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs uppercase text-white text-center font-bold tracking-[0.3em] mb-10">
        Made in russia🇷🇺
      </p>
      <Footer />
    </div>
  );
}

import Footer from "../components/ui/Footer";
import TechUsed from "../components/ui/TechUsed";

export default function About() {
  return (
    <div className="text-center mt-5">
      <div className="text-xs uppercase text-white text-center font-bold  mb-10">
        本网站纯教育用途
        <br />
        如有侵权或违规内容
        <br />
        请及时联系作者
      </div>
      <TechUsed />
      <p className="text-xs uppercase text-white text-center font-bold tracking-[0.3em] mb-10">
        Made in russia🇷🇺
      </p>
      <Footer />
    </div>
  );
}

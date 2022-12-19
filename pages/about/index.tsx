import Footer from "../../components/ui/Footer";
import TechUsed from "../../components/ui/TechUsed";

export default function About() {
  return (
    <div className="text-center mt-5 max-w-3xl">
      <TechUsed />
      <Footer />
      <p className="text-xs mt-2 uppercase text-center font-thin tracking-[0.3em]">
        Made in russia🇷🇺
      </p>
    </div>
  );
}

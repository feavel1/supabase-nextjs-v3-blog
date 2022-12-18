import Footer from "../components/ui/Footer";
import TechUsed from "../components/ui/TechUsed";

export default function About() {
  return (
    <div className="text-center mt-5 max-w-3xl">
      <div className="text-xs uppercase text-center font-bold mb-10">
        本网站纯教育用途
        <br />
        如有问题
        <br />
        请及时联系作者
      </div>
      <div className="mb-10 text-5xl font-bold">404</div>
      <Footer />
    </div>
  );
}

import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import AboutSection from "@/components/AboutSection";
import BrandsGrid from "@/components/BrandsGrid";
import InstagramFeed from "@/components/InstagramFeed";

export default function Home() {
  return (
    <Layout>
      <HeroCarousel />
      <AboutSection />
      <BrandsGrid />
      <InstagramFeed />
    </Layout>
  );
}

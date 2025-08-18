import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import PulsingCircle from "@/components/pulse-circle";
import Services from "@/components/services";
import ShaderBackground from "@/components/shader-background";

export default function Home() {
  return (
    <>
      <ShaderBackground>
        <Header />
        <HeroContent />
        <PulsingCircle />
      </ShaderBackground>
      <Services />
    </>
  );
}

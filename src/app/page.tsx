import {
  Hero,
  SocialProof,
  Problem,
  Transformation,
  HowItWorks,
  Features,
  Roadmap,
  PricingCards,
  WhyBeta,
  FAQ,
  CTAForm,
  Footer,
  ExitIntentModal,
  Analytics,
} from "@/components";

export default function Home() {
  return (
    <>
      <Analytics />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Transformation />
        <HowItWorks />
        <Features />
        <Roadmap />
        <PricingCards />
        <WhyBeta />
        <FAQ />
        <CTAForm />
        <Footer />
      </main>
      <ExitIntentModal />
    </>
  );
}

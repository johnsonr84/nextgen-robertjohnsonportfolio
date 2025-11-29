import {
  AboutSection,
  // AchievementsSection,
  // BlogSection,
  // CertificationsSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  // ServicesSection,
  SkillsSection,
  TestimonialsSection,
} from "@/components/sections";

async function PortfolioContent() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection /> 
      {/* <CertificationsSection /> */}
      {/* <AchievementsSection /> */}
      {/* <ServicesSection /> */}
      {/* <BlogSection /> */}
      <ContactSection /> 
    </>
  );
}

export default PortfolioContent;

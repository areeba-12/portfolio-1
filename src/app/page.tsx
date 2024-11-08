import AboutMe from "@/components/AboutMe";
import HeroBanner from "@/components/HeroBanner"
import NavigationBar from "@/components/NavigationBar";
import Portfolio from "@/components/Portfolio";
import SkillsShowcase from "@/components/SkillsShowcase";
import AdditionalSkills from "@/components/AdditionalSkills";
import WorkExperience from "@/components/WorkExperience";
import Footer from "@/components/Footer";


const Page = () => {
  return (
      <main>
        <>
        
        <HeroBanner />
        <AboutMe />
        <SkillsShowcase />
        <AdditionalSkills />
        <Portfolio />
        <WorkExperience />
        
        
        </>
      </main>
  )
}
export default Page

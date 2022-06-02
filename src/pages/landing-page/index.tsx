// libraries
import React, { useEffect } from "react";

// Components
import ScrollTrigger from "gsap/ScrollTrigger";
import { HeaderMenu } from "../../components/header-menu";
import { ProfileBlock } from "../../components/section-pages/profile-block";
import { scrollEffects, gsap } from "../../components/shared/utils/animate-gsap";
import { BenefitsBlock } from "../../components/section-pages/benefits-block";
import { ProjectsBlock } from "../../components/section-pages/projects-block";

// Styles
import "./landing-page.css"; 
import { TextMotivation } from "../../components/text-motivation";

gsap.registerPlugin(ScrollTrigger);

function LandingPage() {


  useEffect(() => scrollEffects(), [])
  
  return (
    <div className="container-landing-page">
      <HeaderMenu></HeaderMenu>
      <div className="scroll-gsap-profile">
        <ProfileBlock></ProfileBlock>
      </div>
      <TextMotivation text={"Transforme a <br> sua ideia em <br/> um negócio digital."}></TextMotivation>
      <BenefitsBlock></BenefitsBlock>
      <ProjectsBlock></ProjectsBlock>
    </div>
  )
}

export { LandingPage };
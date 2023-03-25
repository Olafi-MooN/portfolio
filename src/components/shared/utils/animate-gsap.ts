import gsap from "gsap";

const scrollEffects = () => {
  gsap.timeline({ scrollTrigger: { trigger: ".container-profile-header", start: "top top", end: () => innerHeight * 1.24, scrub: true, pin: ".container-profile-header", anticipatePin: -1}})
  .add("start")  
  .to(".content-profile-scale", {ease: "none", scale: 0.375, justifyContent: "flex-start", marginBottom: "200px"}, "start")
  .to(".container-profile-header", {ease: "none", backgroundSize:"55.762% 77.9739%"},"start")
  .to(".container-profile-header", {ease: "none", marginTop: "200px"},"start")
  scrollDirectionEffect(".block")
}

const scrollRotateEffect = (divName: string) => { 
  gsap.timeline()
    .fromTo(divName,{
      rotation: 0
    },{
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear"
    },0)
  .timeScale(1);
}

const zoomEffect = (divName: string, scale: number) => { 
  gsap.timeline()
    .to(divName,{
      scale: 1.2,
      duration: 5,
      repeat: -1,
      ease: "linear",
      yoyoEase: true,
    })
  .timeScale(1);
}

const scrollDirectionEffect = (divName: string) => { 
  gsap.fromTo(divName, {
    opacity: 0,
    scrollTrigger: {
      trigger: divName,
      start: "top bottom",
    }
  }, {
    scrollTrigger: {
      trigger: divName,
      start: "top bottom",
    },
    opacity: 1, 
    duration: 1
  });

}

export { scrollEffects, scrollRotateEffect, zoomEffect, scrollDirectionEffect, gsap }
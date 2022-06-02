import React, { useEffect } from "react";
import gsap from "gsap";

// Styles
import "./profile-img.css";

// Imagens
import imgProfile from "../../public/images/profile.jpeg" ;

type ITypeProfile = {
  img?: string;
}

const ProfileImg: React.FC<ITypeProfile> = ({img}) => {

  useEffect(() => {
    gsap.from(".profile-shadow", { repeat: -1, repeatDelay: 20,  width: window.innerHeight > 800 ? 1000 : 350, height: window.innerHeight > 800 ? 1000 : 350, position: "center", duration: 1, opacity: 0.8}).repeat();
    gsap.from(".profile-img", { repeat: -1, repeatDelay: 20, scale: 1, position: "center", duration: 1}).repeat();
    gsap.from(".profile-shadow-border", { repeat: -1, repeatDelay: 7, scale: 1, position: "center", duration: 1}).repeat();
  }, [])

  return(
    <div className="profile-img-component">
      <img src={img ?? imgProfile} alt="imagem de perfil" className="profile-img"/>
      <div className="profile-shadow"></div>
      <div className="profile-shadow-border"></div>
    </div>
  )
}

export { ProfileImg };
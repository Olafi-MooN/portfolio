import React, { useEffect } from "react";
import './grid-template-1.css';
import { DiAngularSimple, DiJavascript, DiNodejsSmall, DiReact } from "react-icons/di";
import { scrollRotateEffect, zoomEffect } from "../../shared/utils/animate-gsap";
import { SkillDescription } from "./skill-description";
import Atropos from 'atropos/react';

const GridTemplate1 = () => {
  useEffect(() => {
    scrollRotateEffect('.rotate-icons');
    zoomEffect('.zoom-icons', 10);
  }, [])

  const angularList = [
    { name: "Services and HTTP", value: 60, background: "#e40000" },
    { name: "Templates", value: 75, background: "#e40000" },
    { name: "Rendering Topics", value: 73, background: "#e40000" },
    { name: "Forms/Validations", value: 65, background: "#e40000" },
  ]
  const reactList = [
    { name: "Services and HTTP", value: 60, background: "#3592bd" },
    { name: "Templates", value: 75, background: "#3592bd" },
    { name: "Rendering Topics", value: 73, background: "#3592bd" },
    { name: "Forms/Validations", value: 65, background: "#3592bd" },
  ]
  const nodeList = [
    { name: "Services and HTTP", value: 60, background: "#1f591f" },
    { name: "Templates", value: 75, background: "#1f591f" },
    { name: "Rendering Topics", value: 73, background: "#1f591f" },
    { name: "Forms/Validations", value: 65, background: "#1f591f" },
  ]
  const javascriptList = [
    { name: "Services and HTTP", value: 60, background: "#b1b126" },
    { name: "Templates", value: 75, background: "#b1b126" },
    { name: "Rendering Topics", value: 73, background: "#b1b126" },
    { name: "Forms/Validations", value: 65, background: "#b1b126" },
  ]

  return (
    <>
      <div className="grid-benefits">
        <div className="block block-1">
          <Atropos
            className="atropos-banner"
            highlight={false}
            shadow={false}
            onEnter={() => console.log("enter")}
          >
            <div>
              <h2 className="title-text-block" data-atropos-offset="2.5">Skills & Experiences</h2>
              <p className="p-text-block" data-atropos-offset="1.5">
                Programador Full-Stack, apaixonado por tecnologia (Javascript, nodeJS, ReactJS, React-Native, HTML e CSS).<br /><br />
                Eu transformo sua pagina estática em uma elegante página dinâmica, atentando sempre a detalhes.<br /><br />
                Venha ser o meu contribuinte, e juntos transformaremos as aplicações web.</p>
            </div>
          </Atropos>
        </div>

        <div className="block block-2 block-icons">
          <DiAngularSimple className="zoom-icons" />
          <p className="p-block-icons">Angular</p>
          <SkillDescription title="Angular JS" progress={angularList} />
        </div>
        <div className="block block-3 block-icons">
          <DiReact className="rotate-icons" />
          <p className="p-block-icons">ReactJS</p>
          <SkillDescription title="ReactJS" progress={reactList} />
        </div>
        <div className="block block-4 block-icons">
          <DiNodejsSmall className="zoom-icons" />
          <p className="p-block-icons">NodeJS</p>
          <SkillDescription title="NodeJS" progress={nodeList} />
        </div>
        <div className="block block-5 block-icons">
          <DiJavascript className="zoom-icons" />
          <p className="p-block-icons">Javascript</p>
          <SkillDescription title="Javascript" progress={javascriptList} />
        </div>
      </div>
    </>
  )
}

export { GridTemplate1 };
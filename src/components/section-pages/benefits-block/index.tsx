import React from "react";
import { GridTemplate1 } from "../../grids/grid-template-1";

//Styles
import "./benefits-block.css";

const BenefitsBlock = () => {
  return (
    <section className="container-benefits-block" id="benefits">
      <div className="content-benefits">
        <h3 className="benefits-aba">Benefícios</h3>
        <h1 className="effect-phrase">Seu parceiro perfeito no desenvolvimento web</h1>
      </div>
      <GridTemplate1></GridTemplate1>
    </section>
  )
}

export { BenefitsBlock };
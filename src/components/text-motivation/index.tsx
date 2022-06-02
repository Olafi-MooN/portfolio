import React from "react";

// Styles
import "./text-motivation.css"

type ITypeTextoMotivation = {
  text?: string;
}

const TextMotivation: React.FC<ITypeTextoMotivation> = ({text}) => {
  return(
    <div className="container-text-motivation">
      <p className="text-motivation"  dangerouslySetInnerHTML={{ __html: text as string}}></p>
    </div>
  )
}

export { TextMotivation };
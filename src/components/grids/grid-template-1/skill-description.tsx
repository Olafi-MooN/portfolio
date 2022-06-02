import React from "react";

type ITypeSkill = { 
  title?: string;
  progress?: ITypeProgress[]
}

type ITypeProgress = {
  name: string; 
  value: number;
  background: string;
}

const SkillDescription: React.FC<ITypeSkill> = ({ title, progress }) => {
  return (
    <>
      <div className="skill">
        <h4 className="skill-title">{title}</h4>
        {progress?.map(item => 
          <>
            <div className="d-skill-description">
              <p className="skill-description">{item.name}</p>
              <p className="skill-description">{item.value}%</p>
            </div>
            <div className="progress" style={{borderColor: item.background ?? "#e40000"}}>
              <div className="color" style={{maxWidth: item.value+'%', backgroundColor: item.background ?? "#e40000"}}></div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export { SkillDescription }
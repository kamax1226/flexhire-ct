import React from 'react';

type skillItemProps = {
    skill: string,
    exp: number
}

const SkillItem: React.FC<skillItemProps> = (props: skillItemProps) => {
  const { skill, exp } = props;

  return (
    <div className="skill-item-div">
      <span>{skill}</span>
      <span>
        {exp}
        + years
      </span>
    </div>
  );
};

export default SkillItem;

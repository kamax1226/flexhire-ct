import React from 'react';

type subTypeItemProps = {
    title: string
}

const SubTypeItem: React.FC<subTypeItemProps> = (props: subTypeItemProps) => {
  const { title } = props;

  return (
    <div className="subtype-item-div">
      <span>{title}</span>
    </div>
  );
};

export default SubTypeItem;

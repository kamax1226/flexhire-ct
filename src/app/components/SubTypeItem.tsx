import React from 'react';
import '../assests/styles/components/subTypeItem.css';

type subTypeItemProps = {
    title: string
}

export default function SubTypeItem(props: subTypeItemProps) {
  const { title } = props;

  return (
    <div className="subtype-item-div">
      <span>{title}</span>
    </div>
  );
}

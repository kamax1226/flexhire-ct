import React, { useMemo } from 'react';
import { Card } from '@material-ui/core';
import { Check } from '@material-ui/icons';

type flowCardProps = {
    status: number
}

const flows = ['Pre-Iterview Request', 'Questions', 'Code Test'];

const FlowCard: React.FC<flowCardProps> = (props: flowCardProps) => {
  const { status } = props;

  const flowsMemo = useMemo(() => flows.map((flow: string, id: number) => (
    // eslint-disable-next-line
    <div key={id} className={id === status ? 'active-flow-item' : 'flow-item'}>
      <div>
        <div className="flow-number">{id === status ? <Check /> : id + 1}</div>
      </div>
      <div className="flow-title">
        {flow}
      </div>
    </div>
  )), [status]);

  return (
    <Card className="flow-card">
      {flowsMemo}
    </Card>
  );
};

export default FlowCard;

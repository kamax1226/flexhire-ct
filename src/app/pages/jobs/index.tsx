import React from 'react';
import { Grid } from '@material-ui/core';
import JobCard from 'app/components/JobCard';
import useGraphql from 'app/hooks/useGraphql';
import { IContracts, INode } from 'utils/types';

type propTypes = {
  loading: boolean;
  contracts: IContracts;
}

const JobCards: React.FC<propTypes> = (props: propTypes) => {
  const { loading, contracts } = props;

  return (
    <>
      {loading ? (
        <div className="jobs-loading-container">
          <div>
            <h3>Please Wait</h3>
            <p>Loading jobs...</p>
          </div>
        </div>
      )
        : contracts.nodes.map((node: INode) => (
          <JobCard
            // eslint-disable-next-line
            key={node.job.id}
            id={node.job.id}
            title={node.job.title}
            content={node.job.description}
            company={node.client.firm.name}
            hiringManager={node.client.firstName}
          />
        ))}
    </>
  );
};

// eslint-disable-next-line
const Jobs: React.FC = () => {
  const { contracts } = useGraphql();

  return (
    <div className="home-container">
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <div className="jobs-container">
            <h3 className="jobs-title">Jobs</h3>
            <hr />
            <JobCards loading={false} contracts={contracts} />
          </div>
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
    </div>
  );
};

export default Jobs;

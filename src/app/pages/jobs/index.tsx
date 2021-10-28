import React, { useMemo, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import JobCard from 'app/components/JobCard';

import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const JobCards: React.FC<any> = (props) => {
  const { loading, jobs } = props;
  console.log('jobs', jobs);

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
        : jobs.map((job: any) => (
          <JobCard
            // eslint-disable-next-line
            key={job.job.id}
            id={job.job.id}
            title={job.job.title}
            content={job.job.description}
            company={job.client.firm.name}
            hiringManager={job.client.firstName}
          />
        ))}
    </>
  );
};

export default function Home() {
  const [jobs, setJobs] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  // useEffect((): any => {
  //   let isSubscribed = true;

  //   fetchJobs().then((response) => {
  //     if (isSubscribed) setLoading(false);
  //     if (isSubscribed) setJobs(response);
  //   });
  //   // return () => (isSubscribed = false);
  //   isSubscribed = false;
  // }, [setJobs, setLoading]);

  const jobsData: any = useLazyLoadQuery(
    graphql`
      query jobsQuery {
        contracts {
          nodes {
            client {
              id
              firstName
              firm {
                name
              }
            }
            job {
              id
              title
              description
              questions {
                title
              }
            }
          }
          totalCount
        }
      }
    `, {

    },
  );

  console.log('jobsData', jobsData.contracts);
  // setLoading(false);

  useEffect(() => {
    // dispatch()
  }, [jobsData]);

  return (
    <div className="home-container">
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <div className="jobs-container">
            <h3 className="jobs-title">Jobs</h3>
            <hr />
            <JobCards loading={false} jobs={jobsData.contracts.nodes} />
          </div>
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
    </div>
  );
}

import React, { useMemo } from 'react';
import {
  Grid, Avatar, Card,
} from '@material-ui/core';
import {
  VerifiedUser, AssignmentTurnedIn,
} from '@material-ui/icons';
import CompensationCard from 'app/components/CompensationCard';

import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import { ICurrentUser } from 'utils/types';
import useGraphql from 'app/hooks/useGraphql';

type propTypes = {
  currentUser: ICurrentUser,
}

const User: React.FC<propTypes> = (props: propTypes) => {
  const { currentUser } = props;

  return (
    <div className="user-avatar-view">
      <Avatar src={currentUser.avatarUrl} className="avatar-img" />
      <div>
        <h3 className="user-name">
          Hi
          {currentUser.firstName}
          , welcome to Flexhire
        </h3>
        <div className="d-flex dash-verified-badge">
          <VerifiedUser />
          {' '}
          Verified
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line
const Dashboard: React.FC = () => {
  const { setGraphqlData } = useGraphql();

  const noJobOfferMemo = useMemo(() => (
    <Card className="no-offer-card">
      <div className="no-offer-title">
        <AssignmentTurnedIn />
        {' '}
        <h3>0</h3>
      </div>
      <p>
        No job offer at the moment.
        {/* eslint-disable-next-line */}
        When a client is interested in working with you, you'll see job offers here.
      </p>
    </Card>
  ), []);

  // eslint-disable-next-line
  const dashboardData = useLazyLoadQuery<any>(
    graphql`
      query dashboardQuery {
        currentUser {
          id
          firstName
          lastName
          avatarUrl
          profile {
            id
            freelancerRate
            annualCompensation
            availabilityType
            freelancerType {
              id
              name
            }
            totalExperience
            textIntroduction
          }
          userSkills {
            experience
            skill {
              id
              name
            }
          }
          timezone
        }
        contracts (
          first: 5
        ) {
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

  setGraphqlData(dashboardData);

  const compensationMemo = useMemo(() => dashboardData && (
    <CompensationCard
      hourly={dashboardData.currentUser.profile.freelancerRate}
      annual={dashboardData.currentUser.profile.annualCompensation}
      type={dashboardData.currentUser.profile.availabilityType[0]}
    />
  ), [dashboardData]);

  return (
    <div>
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <div className="dashboard-container">
            <User currentUser={dashboardData.currentUser} />
            <Grid container>
              <Grid item sm={12} md={12} xs={12}>
                {compensationMemo}
              </Grid>
              <Grid item sm={12} md={12} xs={12}>
                {noJobOfferMemo}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
    </div>
  );
};

export default Dashboard;

import React, { useState, useMemo } from 'react';
import {
  Grid, Avatar, Card,
} from '@material-ui/core';
import {
  VerifiedUser, AssignmentTurnedIn,
} from '@material-ui/icons';
import CompensationCard from 'app/components/CompensationCard';

import { useLazyLoadQuery, useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

type propTypes = {
  currentUser: any,
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

export default function Dashboard() {
  const [currentUser, setCurrentUser] = useState<any>({});
  const [questions, setQuestions] = useState<any>();
  const [chatContracts, setChatContracts] = useState<any>();

  // const suggestQuestionsMemo = useMemo(() => questions && (
  // <Card className="suggest-questions-card">
  //   <h3 className="card-title">Suggested Questions</h3>
  //   <p className="suggest-questions-count">
  //     {questions.length}
  //     {' '}
  //     available
  //   </p>
  //   <p className="suggest-introduction">
  //     Improve your profile by answering the post popular expert questions.
  //     Profiles with more answers get more views and appear first to clients in job postings.
  //   </p>
  //   {
  //     questions.map((question: any, id: number) => (
  //       // eslint-disable-next-line
  //       <div key={id} className="question-div">
  //         <div><div className="question-number">{id + 1}</div></div>
  //         <div className="question-title">
  //           {question.title}
  //         </div>
  //       </div>
  //     ))
  //   }
  // </Card>
  // ), [questions]);

  // const chatContractsMemo = useMemo(() => chatContracts && (
  // <Card className="chat-contracts-card">
  //   <h3 className="card-title">New Interview Request</h3>
  //   <br />
  //   <hr />
  //   <div className="d-flex align-items-center request-info-item">
  //     <Avatar src={chatContracts[0].avatar_url} className="interview-request-avatar" />
  //     <div>
  //       <p className="request-info-item-title1">{chatContracts[0].name}</p>
  //       <p className="request-info-item-title2">{chatContracts[0].firm_role}</p>
  //     </div>
  //   </div>
  //   <div className="d-flex align-items-center request-info-item">
  //     <EventNote />
  //     <div>
  //       <p className="request-info-item-title1">{chatContracts[0].job_title}</p>
  //       <p className="request-info-item-title2">Job</p>
  //     </div>
  //   </div>
  //   <div className="d-flex align-items-center request-info-item">
  //     <Event />
  //     <div>
  //       <p className="request-info-item-title1">{chatContracts[0].name}</p>
  //       <p className="request-info-item-title2">Confirmed interview time in your local time</p>
  //     </div>
  //   </div>
  //   <div className="d-flex align-items-center request-info-item">
  //     <EventNote />
  //     <div>
  //       <p className="request-info-item-title1">7/9 Requests from Brian Mc Sweeney</p>
  //       <p className="request-info-item-title2">Click to review</p>
  //     </div>
  //   </div>
  //   <hr />
  //   <p>
  //     <b>{chatContracts[0].name}</b>
  //     : Hi, Andrei, Thanks for your applying to our role at Flexhire.
  //     We think your profile looks strong and could be a very
  //     interesting fit and we would like to talk to you.
  //   </p>
  //   <hr />
  //   <Button className="interview-accept-btn">INTERVIEW ACCEPTED</Button>
  // </Card>
  // ), [chatContracts]);

  const noJobOfferMemo = useMemo(() => currentUser && (
  <Card className="no-offer-card">
    <div className="no-offer-title">
      <AssignmentTurnedIn />
      {' '}
      <h3>0</h3>
    </div>
    <p>
      No job offer at the moment.
      {/* When a client is interested in working with you, you'll see job offers here. */}
    </p>
  </Card>
  ), [currentUser]);

  // const dashboardData = useFragment<any>(
  //   graphql`
  //     fragment
  //   `
  // );

  const dashboardData: any = useLazyLoadQuery(
    graphql`
      query dashboardQuery {
        currentUser {
          id
          firstName
          lastName
          email
          unconfirmedEmail
          phone
          avatarUrl
          roles
          teamInvitationMessage
          sendTimesheetReminders
          profile {
            id
            freelancerRate
            annualCompensation
            availabilityType
          }
        }
      }
    `, {

    },
  );

  console.log('dashboardData', dashboardData.currentUser);
  // setCurrentUser(dashboardData.currentUser);

  // useEffect((): any => {
  //   let isSubscribed = true;
  //   fetchProfile().then((response) => {
  //     if (isSubscribed) setUserData(response);
  //   });
  //   fetchSuggestQuestions().then((response) => {
  //     if (isSubscribed) setQuestions(response);
  //   });
  //   fetchChatContracts().then((response) => {
  //     if (isSubscribed) setChatContracts(response);
  //   });
  //   // return () => (isSubscribed = false);
  //   isSubscribed = false;
  // }, []);

  const compensationMemo = useMemo(() => dashboardData.currentUser && (
    <CompensationCard
      hourly={dashboardData.currentUser.freelancerRate}
      annual={dashboardData.currentUser.annualCompensation}
      type={dashboardData.currentUser.profile.availabilityType[0]}
    />
  ), [dashboardData.currentUser]);

  return (
    <div>
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          <div className="dashboard-container">
            <User currentUser={dashboardData.currentUser} />
            <Grid container>
              <Grid item sm={6} md={6} xs={12}>
                {compensationMemo}
              </Grid>
              <Grid item sm={6} md={6} xs={12}>
                {noJobOfferMemo}
                {/* {suggestQuestionsMemo} */}
                {/* {chatContractsMemo} */}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
    </div>
  );
}

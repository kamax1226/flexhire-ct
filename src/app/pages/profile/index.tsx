import React, {
  useMemo, useState, useCallback, useEffect,
} from 'react';
import {
  Grid, Avatar, Tab, Tabs,
} from '@material-ui/core';
import { VerifiedUser, School, Work } from '@material-ui/icons';
import SubTypeItem from 'app/components/SubTypeItem';
import SkillItem from 'app/components/SkillItem';
import VideoCard from 'app/components/VideoCard';

import { useLazyLoadQuery } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

export default function Profile() {
  // const [userData, setUserData] = useState<any>();
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect((): any => {
  //   let isSubscribed = true;
  //   fetchProfile().then((response) => {
  //     if (isSubscribed) {
  //       setLoading(false);
  //       setUserData(response);
  //     }
  //   });
  //   isSubscribed = false;
  // }, []);

  const profileData: any = useLazyLoadQuery(
    graphql`
      query profileQuery {
        currentUser {
          id
          firstName
          lastName
          avatarUrl
          userSkills {
            experience
            skill {
              id
              name
            }
          }
          profile {
            id
            freelancerType {
              id
              name
            }
            totalExperience
            textIntroduction
          }
          timezone
        }
      }
    `, {

    },
  );

  console.log('profileData', profileData.currentUser);

  const userData = profileData.currentUser;

  const handleChangeIndex = useCallback((event, value) => {
    setIndex(value);
  }, [setIndex]);

  const verifyBadge = useMemo(() => userData && (
  <div className="d-flex verified-badge">
    <VerifiedUser />
    {' '}
    Verified
  </div>
  ), [userData]);

  // const subTypesMemo = useMemo(() => userData && userData.profile.freelancer_subtypes.map(
  //   // eslint-disable-next-line
  //   (subtype: any, id: number) => <SubTypeItem title={subtype.name} key={id} />), [userData]);

  const skillsMemo = useMemo(() => userData && userData.userSkills.map(
    (skill: any) => (
      <SkillItem key={skill.skill.id} skill={skill.skill.name} exp={skill.experience} />
    ),
  ), [userData]);

  // const workEducationMemo = useMemo(() => userData && userData.timeline_entries.map(
  //   (timeline: any, id: number) => (
  //     // eslint-disable-next-line
  //     <div key={id} className="timeline-div">
  //       <div className="timeline-icon">
  //         {
  //         timeline.entry_type === 'work' ? <Work /> : <School />
  //       }
  //       </div>
  //       <div>
  //         <h4 className="timeline-title">{timeline.title}</h4>
  //         <p className="timeline-date">
  //           {timeline.date_start}
  //           {' '}
  //           ~
  //           {' '}
  //           {timeline.date_end}
  //         </p>
  //         <p className="timeline-description">{timeline.description}</p>
  //       </div>
  //     </div>
  //   ),
  // ), [userData]);

  const profileMemo = useMemo(() => {
    if (loading) {
      return (
        <div className="profile-loading-container">
          <div>
            <h3>Please Wait</h3>
            <p>Loading your profile...</p>
          </div>
        </div>
      );
    }
    return userData && (
    <div className="profile-container">
      <div className="profile-top-block">
        <Grid container>
          <Grid item sm={4} xs={12} className="verify-tag-block">
            {verifyBadge}
            <p className="time-zone-text">{userData.timezone}</p>
          </Grid>
          <Grid item sm={4} xs={12} className="d-flex justify-center">
            <Avatar src={userData.avatarUrl} className="profile-avatar" />
          </Grid>
          <Grid item sm={4} xs={12} />
        </Grid>
        <div>
          <h3 className="user-name">
            {userData.firstName}
            {' '}
            {userData.lastName}
            {' '}
            -
            {' '}
            {userData.profile.freelancerType.name}
            {' '}
          </h3>
          <h3 className="user-experience">
            {userData.profile.totalExperience}
            {' '}
            Years Experience
          </h3>
        </div>
        <div className="d-flex justify-center flex-wrap">
          {/* {subTypesMemo} */}
        </div>
        <p className="profile-introduction-text">{userData.profile.textIntroduction}</p>
        <div className="skills-content">
          {skillsMemo}
        </div>
      </div>

      <hr />
      <div className="vidoes-content">
        <Tabs
          value={index}
          onChange={handleChangeIndex}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          className="tabs-container"
        >
          <Tab label="Video Answers" />
          <Tab label="Work & Education" />
        </Tabs>
        {
            index === 0 && (
            <div className="video-answers-content">
              <Grid container>
                <Grid item sm={6} xs={12}>
                  <VideoCard />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <VideoCard />
                </Grid>
              </Grid>
            </div>
            )
        }
        {
            index === 1 && (
            <div className="work-education-content">
                {/* {workEducationMemo} */}
            </div>
            )
        }
      </div>
    </div>
    );
  }, [userData, index, handleChangeIndex, skillsMemo,
    verifyBadge, loading]);

  return (
    <div className="home-container">
      <Grid container>
        <Grid item sm={2} xs={1} />
        <Grid item sm={8} xs={10}>
          {profileMemo}
        </Grid>
        <Grid item sm={2} xs={1} />
      </Grid>
    </div>
  );
}

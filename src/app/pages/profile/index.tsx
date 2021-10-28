import React, {
  useMemo, useState, useCallback,
} from 'react';
import {
  Grid, Avatar, Tab, Tabs,
} from '@material-ui/core';
import { VerifiedUser } from '@material-ui/icons';
import SkillItem from 'app/components/SkillItem';
import VideoCard from 'app/components/VideoCard';
import { IUserSkill } from 'utils/types';
import useGraphql from 'app/hooks/useGraphql';

const Profile: React.FC = () => {
  const { currentUser } = useGraphql();
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [loading, setLoading] = useState<boolean>(false);

  const handleChangeIndex = useCallback((event, value) => {
    setIndex(value);
  }, [setIndex]);

  const verifyBadge = useMemo(() => (
    <div className="d-flex verified-badge">
      <VerifiedUser />
      {' '}
      Verified
    </div>
  ), []);

  const skillsMemo = useMemo(() => currentUser && currentUser.userSkills.map(
    (userSkill: IUserSkill) => (
      <SkillItem key={userSkill.skill.id} skill={userSkill.skill.name} exp={userSkill.experience} />
    ),
  ), [currentUser]);

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
    return currentUser && (
    <div className="profile-container">
      <div className="profile-top-block">
        <Grid container>
          <Grid item sm={4} xs={12} className="verify-tag-block">
            {verifyBadge}
            <p className="time-zone-text">{currentUser.timezone}</p>
          </Grid>
          <Grid item sm={4} xs={12} className="d-flex justify-center">
            <Avatar src={currentUser.avatarUrl} className="profile-avatar" />
          </Grid>
          <Grid item sm={4} xs={12} />
        </Grid>
        <div>
          <h3 className="user-name">
            {currentUser.firstName}
            {' '}
            {currentUser.lastName}
            {' '}
            -
            {' '}
            {currentUser.profile.freelancerType.name}
            {' '}
          </h3>
          <h3 className="user-experience">
            {currentUser.profile.totalExperience}
            {' '}
            Years Experience
          </h3>
        </div>
        <div className="d-flex justify-center flex-wrap">
          {/* {subTypesMemo} */}
        </div>
        <p className="profile-introduction-text">{currentUser.profile.textIntroduction}</p>
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
  }, [currentUser, index, handleChangeIndex, skillsMemo,
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
};

export default Profile;

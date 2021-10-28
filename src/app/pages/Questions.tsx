import React from 'react';
import { Grid } from '@material-ui/core';
import FlowCard from '../components/FlowCard';
import QuestionsCard from '../components/QuestionsCard';

const Questions: React.FC = () => (
  <div className="home-container">
    <Grid container>
      <Grid item sm={2} xs={1} />
      <Grid item sm={8} xs={10}>
        <Grid container>
          <Grid item sm={3} xs={12}>
            <FlowCard status={1} />
          </Grid>
          <Grid item sm={9} xs={12}>
            <QuestionsCard />
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} xs={1} />
    </Grid>
  </div>
);

export default Questions;

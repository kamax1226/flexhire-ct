import React, { useState, useEffect, useMemo } from 'react';
import { Card } from '@material-ui/core';
import { Error, Comment } from '@material-ui/icons';
import useGraphql from 'app/hooks/useGraphql';
import { INode, IQuestion } from 'utils/types';
import { useLocation } from 'react-router-dom';

const QuestionsCard: React.FC = () => {
  const location = useLocation();
  const { contracts } = useGraphql();
  const [id, setId] = useState(0);

  useEffect(() => {
    const tId: string = new URLSearchParams(location.search).get('id') || '';
    setId(parseInt(tId, 10));
  }, [setId, location]);

  const questionsMemo = useMemo(() => contracts.nodes && contracts.nodes.map(
    (node: INode) => node.job.questions && node.job.questions.map(
      (question: IQuestion, idx: number) => (
        // eslint-disable-next-line
        <div key={idx}>
          <hr />
          <div className="questions-item">
            <Comment />
            <p>{question.title}</p>
          </div>
        </div>
      ),
    ),
  ), [contracts, id]);

  return (
    <Card className="questions-card">
      <h3 className="questions-card-title">Questions</h3>
      <p className="questions-introduction">
        Flexhire has asked you to answer the following questions
        before scheduling an in-person interview.
        You can use our built in recorder and teleprompter and check
        out sample videos for inspiration,
        or upload an existing video if you prefer.
        Although a video answer is recommended, you can answer via text as an alternative.
      </p>
      <div className="questions-alert-text">
        <Error />
        <p>
          Videos must be at most 1 minute long and textual
          answers must be at most 1500 characters long.

        </p>
      </div>
      <div className="questions-content">
        <div className="alert-text">
          <Error />
          <p>
            Record a brief video introduction describing who you are,
            {/* eslint-disable-next-line */}
            where you're from, your background, education and work experience
          </p>

        </div>
        {questionsMemo}
      </div>
      <p>If you have any questions, you can message Biran from Flexhire.</p>
    </Card>
  );
};

export default QuestionsCard;

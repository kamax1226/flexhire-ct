import React, {
  useState, useCallback, useEffect, useMemo,
} from 'react';
import { Person, EditLocation } from '@material-ui/icons';
import { Link } from 'react-router-dom';

type jobCardProps = {
    id: string,
    title: string,
    content: string,
    company: string,
    hiringManager: string
}

const JobCard: React.FC<jobCardProps> = (props: jobCardProps) => {
  const {
    id, title, content, company, hiringManager,
  } = props;

  const [contentText, setContentText] = useState<string>();
  const [more, setMore] = useState<boolean>(true);

  const handleMoreContent = useCallback(() => {
    setMore(!more);
    if (!more) {
      const text = `${content.slice(0, 600)} . . .`;
      setContentText(text);
    } else {
      setContentText(content);
    }
  }, [more, content, setContentText]);

  const moreBtnMemo = useMemo(() => ((more && content.length > 800) ? (
    // eslint-disable-next-line
    <span onClick={handleMoreContent} className="more-btn">More</span>
  ) : (
    // eslint-disable-next-line
    <span onClick={handleMoreContent} className="more-btn">Less</span>
  )), [content, handleMoreContent, more]);

  useEffect(() => {
    if (content.length > 800) {
      const text = `${content.slice(0, 600)} . . .`;
      setContentText(text);
    } else {
      setContentText(content);
    }
  }, [content]);

  return (
    <div className="job-card">
      <h3 className="job-card-title">{title}</h3>
      <p className="job-card-content">
        {contentText}
        {moreBtnMemo}
      </p>
      <div className="job-card-bottom">
        <div>
          {hiringManager && (
          <p className="manager-name">
            <Person />
            {hiringManager}
          </p>
          )}
          {company && (
          <p className="company-name">
            <EditLocation />
            {company}
          </p>
          )}
        </div>
        <div className="job-actions-div">
          <Link to={`/questions?id=${id}`}>Questions</Link>
          <Link to={`/codetest?id=${id}`}>Code Test</Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

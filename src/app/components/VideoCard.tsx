import React from 'react';
import { Card } from '@material-ui/core';
import videoUrl from '../../assets/video/4k.mp4';

const VideoCard: React.FC = () => (
  <Card className="video-card">
    <video width="400" height="200">
      <source src={videoUrl} type="video/mp4" />
      <track src="captions_en.vtt" kind="captions" label="english_captions" />
      <track src="captions_es.vtt" kind="captions" label="spanish_captions" />
    </video>
    <p>video</p>
  </Card>
);

export default VideoCard;

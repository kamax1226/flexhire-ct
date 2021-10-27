import React from 'react';
import { Card } from '@material-ui/core';
// import video from "../assests/video/4k.mp4";

export default function VideoCard() {
  return (
    <Card className="video-card">
      {/* <video width="400" controls /> */}
      <video width="400" height="200">
        <source src="myVideo.mp4" type="video/mp4" />
        <track src="captions_en.vtt" kind="captions" label="english_captions" />
        <track src="captions_es.vtt" kind="captions" label="spanish_captions" />
      </video>
      <p>video</p>
    </Card>
  );
}

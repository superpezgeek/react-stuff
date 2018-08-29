import React from 'react';
import VideoListItem from './video-list-item.component';

const VideoList = ({videos, onVideoSelected}) => {
  const videoItems = videos.map(video => {
    return <VideoListItem key={video.etag} onVideoSelected={onVideoSelected} video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;

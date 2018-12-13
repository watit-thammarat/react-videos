import React from 'react';

const ViedoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const { videoId } = video.id;
  const { title, description } = video.snippet;
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title={title} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ViedoDetail;

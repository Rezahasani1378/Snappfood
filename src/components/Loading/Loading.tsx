import React from 'react';
import './styles.less';

const Loading = (props: { color: string }) => {
  const loadingColor = props.color;

  return (
    <>
      <div
        className="explore-loading-container"
      >
        <div
          className="content-loading"
          style={{ borderRightColor: loadingColor }}
        />
      </div>
    </>
  );
};

export default Loading;

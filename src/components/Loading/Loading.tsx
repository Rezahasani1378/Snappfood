import React from 'react';
import './styles.less';

const Loading = (props: { color: string; isLastPage: boolean }) => {
  const loadingColor = props.color;
  const isLastPage = props.isLastPage;

  return (
    <>
      <div
        className="explore-loading-container"
        style={{display: isLastPage ? 'none' : 'flex'}}
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

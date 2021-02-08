import React from 'react';
import './styles.less';

const Loading = (props: { color: string; isLastPage: boolean }) => {
  const loadingColor = props.color;
  const isLastPage = props.isLastPage;

  return (
    <>
      <div
        className="loading"
        style={{display: isLastPage ? 'none' : 'flex'}}
      >
        <div
          className="loading__animation"
          style={{ borderRightColor: loadingColor }}
        />
      </div>
    </>
  );
};

export default Loading;

import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="137" cy="139" r="125" />
    <rect x="0" y="283" rx="10" ry="10" width="280" height="25" />
    <rect x="2" y="337" rx="10" ry="10" width="280" height="88" />
    <rect x="2" y="456" rx="10" ry="10" width="95" height="30" />
    <rect x="117" y="458" rx="26" ry="26" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;

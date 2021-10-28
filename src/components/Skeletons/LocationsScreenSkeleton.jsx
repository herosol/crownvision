import React from "react";
import ContentLoader from "react-content-loader";

const LocationScreenSkeleton = (props) => (
  <ContentLoader viewBox="0 0 500 300" height={1080} width={1920} {...props}>
    <rect x="19" y="30" rx="0" ry="0" width="465" height="155" />
    <rect x="18" y="200" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="200" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="200" rx="0" ry="0" width="141" height="38" />
    <rect x="18" y="250" rx="0" ry="0" width="141" height="38" />
    <rect x="182" y="250" rx="0" ry="0" width="141" height="38" />
    <rect x="343" y="250" rx="0" ry="0" width="141" height="38" />
  </ContentLoader>
);

export default LocationScreenSkeleton;

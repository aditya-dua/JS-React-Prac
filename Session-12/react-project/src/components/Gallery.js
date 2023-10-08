import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";
const Gallery = props => {
  const results = props.data;
  const children = (results.length > 0) ?
    results.map(({id, fullImageUrl, smallImageUrl, title}) => <Image fullImageUrl={fullImageUrl} smallImageUrl={smallImageUrl} key={id} alt={title} />) :
    <NoImages />; // return 'not found' component if no images fetched
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
};

export default Gallery;

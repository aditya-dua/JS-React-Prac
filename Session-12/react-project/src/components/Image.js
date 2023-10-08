import React from "react";

const Image = ({ fullImageUrl, smallImageUrl, title }) => (
  <li>
    <a href={fullImageUrl}>
      <img src={smallImageUrl} alt={title} />
    </a>
  </li>
);

export default Image;

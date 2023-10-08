import React, { createContext, useState } from "react";
import { getImagesFromSearchTerm } from "../api";
export const PhotoContext = createContext();

const PhotoContextProvider = props => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const runSearch = async query => {
      try {
        const response = await getImagesFromSearchTerm(query);
        const images = response.map(image => ({
          id: image.id,
          fullImageUrl : image.urls.full,
          smallImageUrl : image.urls.small,
          title: image.description,
        }));
        setImages(images);
        setLoading(false);
      } catch (error) {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
          );
      }

  };
  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {props.children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;

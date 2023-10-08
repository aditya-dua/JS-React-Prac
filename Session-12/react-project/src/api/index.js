export const getImagesFromSearchTerm = async (term) => {
  const data = await fetch(`https://api.unsplash.com/search/photos?query=${term}&client_id=J8-5ZQiMU7xsi83-6dO7cERxN6AWv1snN2hvzlF6PXo&per_page=12`)
  const json = await data.json();
  return json.results;
};
const API_KEY = "563492ad6f91700001000001fe7928a7fb154d0ab8d148032061a505";

export const getCuratedPhotos = async () => {
  const res = await fetch(
    `https://api.pexels.com/v1/curated?page=21&per_page=18`,
    {
      headers: {
        Authorization: API_KEY,
      },
    }
  );
  const responseJson = await res.json();
  return responseJson.photos;
};

export const getQueryPhotos = async (query) => {
  const res = await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const responseJson = await res.json();
  return responseJson.photos;
};

export const getPhotoById = async (id) => {
  const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const responseJson = await res.json();
  return responseJson;
};

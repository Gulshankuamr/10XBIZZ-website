const BASE_URL = "https://one0x-backend-ihzf.onrender.com/api";

const requestJson = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Blog API request failed with status ${res.status}`);
  }

  return res.json();
};

export const getAllBlogs = async () => {
  return requestJson(`${BASE_URL}/blogs`);
};

export const getBlogById = async (id) => {
  return requestJson(`${BASE_URL}/blogs/${id}`);
};

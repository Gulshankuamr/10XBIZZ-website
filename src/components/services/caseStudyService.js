const BASE_URL = "https://10x.fctesting.shop/api";

const requestJson = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Case study API request failed with status ${res.status}`);
  }

  return res.json();
};

export const getAllCaseStudies = async () => {
  return requestJson(`${BASE_URL}/case-studies`);
};

export const getCaseStudyById = async (id) => {
  return requestJson(`${BASE_URL}/case-studies/${id}`);
};

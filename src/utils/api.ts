import axios from "axios";

const API_URL = "https://bc5c93c6c6b3dbac.mokky.dev";

export const getArticlesApi = async () => {
  try {
    const response = (await axios.get(`${API_URL}/articles`)).data;
    return response;
  } catch (error) {
    console.error("Ошибка при получении статей:", error);
    throw error;
  }
};

export const getArticleByIdApi = async (id: string) => {
  try {
    const response = (await axios.get(`${API_URL}/articles?id=${id}`)).data[0];
    return response;
  } catch (error) {
    console.error("Ошибка при получении статьи:", error);
    throw error;
  }
};

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TArticle } from "../utils/types";
import { getArticleByIdApi, getArticlesApi } from "../utils/api";

export const getArticleByIdThunk = createAsyncThunk(
  "article/getArticleByIdApi",
  async (id: string) => {
    const results = await getArticleByIdApi(id);
    return results;
  },
);

export const getArticlesThunk = createAsyncThunk(
  "article/getArticlesApi",
  () => {
    const articles = getArticlesApi();
    return articles;
  },
);

export interface articlesState {
  article: TArticle | null;
  articles: Array<TArticle>;
  isLoadingState: boolean;
}

export const initialState: articlesState = {
  article: null,
  articles: [],
  isLoadingState: false,
};

export const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  selectors: {
    getState: (state) => state,
    getArticles: (state) => state.articles,
    getArticle: (state) => state.article,
    getIsloadingState: (state) => state.isLoadingState,
  },
  extraReducers: (builder) => {
    builder.addCase(getArticleByIdThunk.pending, (state) => {
      state.isLoadingState = true;
    });
    builder.addCase(getArticleByIdThunk.fulfilled, (state, { payload }) => {
      state.isLoadingState = false;
      state.article = payload;
    });

    builder.addCase(getArticlesThunk.pending, (state) => {
      state.isLoadingState = true;
    });
    builder.addCase(getArticlesThunk.fulfilled, (state, { payload }) => {
      state.isLoadingState = false;
      state.articles = payload;
    });
  },
});

export const { getState, getIsloadingState, getArticle, getArticles } =
  articlesSlice.selectors;
export const articles = articlesSlice.reducer;

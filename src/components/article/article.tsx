import { FC, useEffect } from "react";
import { ArticleUI } from "../ui";
import {
  getArticle,
  getArticleByIdThunk,
  getIsloadingState,
} from "../../services/articlesSlice";
import { useDispatch, useSelector } from "../../services/store";
import { TArticle } from "../../utils/types";
import { useParams } from "react-router-dom";
import { Preloader } from "../preloder";

export const Article: FC = () => {
  const articleId = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsloadingState);

  useEffect(() => {
    dispatch(getArticleByIdThunk(`${articleId.id}`));
    window.scrollTo(0, 0);
  }, [articleId.id, dispatch]);

  const article: TArticle | null = useSelector(getArticle);

  return isLoading ? (
    <Preloader></Preloader>
  ) : article ? (
    <ArticleUI article={article}></ArticleUI>
  ) : (
    <></>
  );
};

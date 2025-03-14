import { FC } from "react";
import { ArticleGridUI } from "../ui";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../services/articlesSlice";
import { useSelector } from "../../services/store";

export const ArticleGrid: FC = () => {
  const navigate = useNavigate();

  const linkHandle = (id: string) => {
    navigate(`/surf-coffee/article/${id}`);
  };

  const articles = useSelector(getArticles);

  return articles.length > 0 ? (
    <ArticleGridUI articles={articles} linkHandle={linkHandle}></ArticleGridUI>
  ) : (
    <></>
  );
};

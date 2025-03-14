import { FC } from "react";
import { ArticlePreviewUI } from "../ui";
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../services/articlesSlice";
import { useSelector } from "../../services/store";

export const ArticlePreview: FC = () => {
  const navigate = useNavigate();

  const linkHandle = (id: string) => {
    navigate(`/surf-coffee/article/${id}`);
  };

  const article = useSelector(getArticles)[2];

  return article ? (
    <ArticlePreviewUI
      article={article}
      linkHandle={linkHandle}
    ></ArticlePreviewUI>
  ) : (
    <></>
  );
};

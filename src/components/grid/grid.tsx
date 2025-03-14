import { FC } from "react";
import { GridUI } from "../ui";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../services/store";
import { getArticles } from "../../services/articlesSlice";

export const Grid: FC = () => {
  const navigate = useNavigate();

  const articles = useSelector(getArticles);

  const linkHandle = (id: string) => {
    navigate(`/surf-coffee/article/${id}`);
  };

  return articles.length > 0 ? (
    <GridUI articles={articles} linkHandle={linkHandle}></GridUI>
  ) : (
    <></>
  );
};

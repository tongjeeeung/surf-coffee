import { FC } from "react";
import { RibbonUI } from "../ui";
import { getArticles } from "../../services/articlesSlice";
import { useSelector } from "../../services/store";

export const Ribbon: FC = () => {
  const articles = useSelector(getArticles);

  return articles.length > 0 ? (
    <RibbonUI articles={articles}></RibbonUI>
  ) : (
    <></>
  );
};

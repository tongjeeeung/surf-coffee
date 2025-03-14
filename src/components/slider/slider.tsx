import { FC } from "react";
import { SliderUI } from "../ui";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../services/store";
import { getArticles } from "../../services/articlesSlice";

export const Slider: FC = () => {
  const navigate = useNavigate();

  const linkHandle = (id: string) => {
    navigate(`/surf-coffee/article/${id}`);
  };

  const articles = useSelector(getArticles);

  return articles.length > 0 ? (
    <SliderUI articles={articles} linkHandle={linkHandle}></SliderUI>
  ) : (
    <></>
  );
};

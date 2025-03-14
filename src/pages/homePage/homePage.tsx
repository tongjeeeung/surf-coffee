import { FC } from "react";
import {
  Grid,
  Slider,
  ArticlePreview,
  ArticleGrid,
  Ribbon,
  Preloader,
} from "../../components";
import { useSelector } from "../../services/store";
import { getIsloadingState } from "../../services/articlesSlice";

export const HomePage: FC = () => {
  const isLoading = useSelector(getIsloadingState);

  return isLoading ? (
    <Preloader></Preloader>
  ) : (
    <>
      <Grid></Grid>
      <Ribbon></Ribbon>
      <Slider></Slider>
      <ArticlePreview></ArticlePreview>
      <ArticleGrid></ArticleGrid>
    </>
  );
};

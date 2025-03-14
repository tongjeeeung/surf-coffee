export type TFirstArticle = {
  title: string;
  subtitle: string;
  about: string;
  imgTitle: string;
  imgAbout: string;
  ul: TLiArticles[];
  titleConclusion: string;
  textConclusion: string;
  textSecondConclusion?: string;
  id: string;
};

export type TLiArticles = {
  liName: string;
  liAbout: string;
  liAboutSub: string;
  liImg: string;
};

export type TSecondArticle = {
  title: string;
  subtitle: string;
  about: string;
  secondAbout: string;
  imgTitle: string;
  imgAbout: string;
  titleUl?: string;
  ul: TLiArticles[];
  textConclusion: string;
  textSecondConclusion: string;
  id: string;
};

export type TThirdArticle = {
  title: string;
  subtitle: string;
  about: string;
  secondAbout: string;
  imgTitle: string;
  imgAbout: string;
  ul: TLiArticles[];
  titleConclusion: string;
  textConclusion: string;
  textSecondConclusion?: string;
  id: string;
};

export type TFourArticle = {
  title: string;
  subtitle: string;
  about: string;
  imgTitle: string;
  imgAbout: string;
  titleUl: string;
  ul: TLiArticles[];
  titleDrinks: string;
  ulDrinks: TLiArticles[];
  titleFood: string;
  liFood: TLiArticles;
  titleConclusion: string;
  textConclusion: string;
  textSecondConclusion?: string;
  id: string;
};

export type TFiveArticle = {
  title: string;
  subtitle: string;
  about: string;
  secondAbout: string;
  imgTitle: string;
  imgAbout: string;
  titleUl: string;
  ul: TLiArticles[];
  titleDrinks: string;
  ulDrinks: TLiArticles[];
  liVideo: TLiArticles;
  titleConclusion: string;
  textConclusion: string;
  textSecondConclusion?: string;
  id: string;
};

export type TArticle =
  | TFirstArticle
  | TSecondArticle
  | TThirdArticle
  | TFourArticle
  | TFiveArticle;

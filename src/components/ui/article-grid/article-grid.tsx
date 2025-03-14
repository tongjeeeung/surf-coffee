import { easeInOut, motion } from "motion/react";
import { FC, useState } from "react";
import { TArticle } from "../../../utils/types";

export const ArticleGridUI: FC<{
  articles: TArticle[];
  linkHandle: (id: string) => void;
}> = ({ articles, linkHandle }) => {
  const [articlesNumber, setArticlesNumber] = useState(4);

  const buttonHandle = () => {
    if (articles.length > articlesNumber) {
      setArticlesNumber(articlesNumber + 4);
    }
  };

  return (
    <>
      <h2 className="text-4xl text-center my-4">Другие статьи</h2>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 w-full h-full px-4 py-2 lg:text-lg xl:text-2xl mb-4">
        {articles.length > 0 ? (
          articles.map((article: TArticle, index) => {
            return index < articlesNumber ? (
              <motion.div
                key={article.id}
                onClick={() => {
                  linkHandle(article.id);
                }}
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 2,
                  ease: easeInOut,
                  delay:
                    index % 4 == 0
                      ? 0
                      : index % 4 == 1
                        ? 0.5
                        : index % 4 == 2
                          ? 1
                          : index % 4 == 3
                            ? 1.5
                            : 0,
                }}
                className="group relative col-span-1 h-[16vh] lg:h-[20vh] xl:h-[24vh] flex justify-center items-center cursor-pointer"
              >
                <img
                  className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-105 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
                  src={article.imgTitle}
                ></img>
                <span className="text-stext text-center">{article.title}</span>
              </motion.div>
            ) : (
              <></>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: easeInOut, delay: 2 }}
        className="flex justify-center p-4 mb-4"
      >
        {articles.length >= articlesNumber ? (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={buttonHandle}
            className="text-xl lg:w-[12vw] w-[18vw] py-2 px-2 border-solid border-[2px] cursor-pointer border-text"
          >
            Больше
          </motion.button>
        ) : (
          <></>
        )}
      </motion.div>
    </>
  );
};

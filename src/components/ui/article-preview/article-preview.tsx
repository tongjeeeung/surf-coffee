import { easeInOut, motion } from "motion/react";
import { FC } from "react";
import { TArticle } from "../../../utils/types";

export const ArticlePreviewUI: FC<{
  article: TArticle;
  linkHandle: (id: string) => void;
}> = ({ article, linkHandle }) => {
  return (
    <div
      key={article.id}
      className="px-4 py-4 flex flex-col items-center gap-4 lg:text-2xl text-xl tracking-wider text-justify overflow-hidden"
    >
      <h2 className="lg:text-6xl text-4xl text-center mb-4">{article.title}</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: easeInOut }}
        className="flex flex-col lg:flex-row justify-between items-center gap-4 w-full"
      >
        <p className="lg:w-[50vw] xl:w-[40vw] w-full text-center">
          {article.about}
        </p>
        <motion.div
          initial={{ x: 400 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: easeInOut }}
          className="w-full h-[50vh] lg:w-[50vw] xl:w-[60vw] xl:h-[80vh]"
        >
          <img
            className="w-full h-full object-center object-cover"
            src={article.imgAbout}
          ></img>
        </motion.div>
      </motion.div>
      <p className="text-center">
        {"secondAbout" in article ? article.secondAbout : <></>}
      </p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: easeInOut }}
        className="flex justify-center p-4 mb-4"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            linkHandle(article.id);
          }}
          className="text-xl lg:w-[12vw] w-[18vw] p-2 border-solid border-[2px] cursor-pointer border-text"
        >
          Перейти
        </motion.button>
      </motion.div>
    </div>
  );
};

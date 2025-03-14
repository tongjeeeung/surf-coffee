import { easeInOut } from "motion";
import { motion } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";
import { TArticle } from "../../../utils/types";

export const SliderUI: FC<{
  articles: TArticle[];
  linkHandle: (id: string) => void;
}> = ({ articles, linkHandle }) => {
  const contentRef = useRef<null | HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (articles.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
      }, 15000);

      return () => clearInterval(interval);
    }
  }, [articles.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length,
    );
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: -currentIndex * 100 + "%" }}
        transition={{ duration: 5 }}
        ref={contentRef}
        className="w-full h-[50vh] px-4 py-2 text-2xl xl:text-3xl flex gap-8"
      >
        {articles.length > 0 ? (
          articles.map((article: TArticle) => {
            return (
              <div
                key={article.id}
                onClick={() => {
                  linkHandle(article.id);
                }}
                className="group min-w-full relative flex justify-center items-center cursor-pointer h-full text-white"
              >
                <img
                  className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-102 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
                  src={article.imgTitle}
                ></img>
                <div className="flex flex-col text-center uppercase">
                  <span>{article.title}</span>
                  <span>{article.subtitle}</span>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3, ease: easeInOut },
        }}
        whileTap={{ scale: 1.2 }}
        onClick={prevSlide}
        className="absolute top-[42%] left-[2vw] text-stext text-5xl cursor-pointer duration-300 transition-all ease-in-out hover:text-accent hover:duration-300 hover:transition-all hover:ease-in-out"
      >
        <span>{"<"}</span>
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.3,
          transition: { duration: 0.3, ease: easeInOut },
        }}
        whileTap={{ scale: 1.2 }}
        onClick={nextSlide}
        className="absolute top-[42%] right-[2vw] text-stext text-5xl cursor-pointer duration-300 transition-all ease-in-out hover:text-accent hover:duration-300 hover:transition-all hover:ease-in-out"
      >
        <span>{">"}</span>
      </motion.div>
    </div>
  );
};

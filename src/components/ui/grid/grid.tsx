import { easeInOut, motion } from "motion/react";
import { FC } from "react";
import { TArticle } from "../../../utils/types";

export const GridUI: FC<{
  articles: TArticle[];
  linkHandle: (id: string) => void;
}> = ({ articles, linkHandle }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-[55vh] lg:h-[70vh] xl:h-[80vh] px-4 py-2 text-xl xl:text-2xl overflow-hidden">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="group relative col-span-2 flex justify-center items-center cursor-pointer"
        onClick={() => {
          linkHandle(articles[2].id);
        }}
      >
        <img
          className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-102 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
          src={articles[2].imgTitle}
        ></img>
        <span className="text-white text-center">{articles[2].title}</span>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="group relative col-span-1 flex justify-center items-center cursor-pointer"
        onClick={() => {
          linkHandle(articles[1].id);
        }}
      >
        <img
          className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-102 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
          src={articles[1].imgTitle}
        ></img>
        <span className="text-white text-center">{articles[1].title}</span>
      </motion.div>
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="group relative col-span-1 flex justify-center items-center cursor-pointer"
        onClick={() => {
          linkHandle(articles[4].id);
        }}
      >
        <img
          className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-102 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
          src={articles[4].imgTitle}
        ></img>
        <span className="text-white text-center">{articles[4].title}</span>
      </motion.div>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 2, ease: easeInOut }}
        className="group relative col-span-2 flex justify-center items-center cursor-pointer"
        onClick={() => {
          linkHandle(articles[3].id);
        }}
      >
        <img
          className="w-full h-full absolute top-0 bottom-0 z-[-1] object-cover brightness-40 duration-300 transition-all ease-in-out group-hover:brightness-30 group-hover:scale-102 group-hover:duration-300 group-hover:transition-all group-hover:ease-in-out"
          src={articles[3].imgTitle}
        ></img>
        <span className="text-white text-center">{articles[3].title}</span>
      </motion.div>
    </div>
  );
};

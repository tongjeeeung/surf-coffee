import { motion } from "motion/react";
import { FC, useEffect, useRef } from "react";
import { TArticle } from "../../../utils/types";
import { Link } from "react-router-dom";

export const RibbonUI: FC<{
  articles: TArticle[];
}> = ({ articles }) => {
  const contentRef = useRef<null | HTMLDivElement>(null);
  const containerRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    const startScrolling = () => {
      const contentWidth = content.offsetWidth;

      content.innerHTML += content.innerHTML;

      let position = 0;

      const scroll = () => {
        position -= 1;
        if (position + 720 <= -contentWidth) {
          position = 0;
        }

        content.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(scroll);
      };

      scroll();
    };

    startScrolling();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        ref={contentRef}
        className="flex w-full h-[14vh] lg:h-[18vh] xl:h-[18vh] py-2 text-sm xl:text-2xl"
      >
        {articles.length > 0 ? (
          articles.map((article: TArticle) => {
            return (
              <Link
                to={`/surf-coffee/article/${article.id}`}
                key={article.id}
                className="min-w-[25%] border-solid border-y-[2px] border-x-[1px] border-black flex flex-col justify-center p-2 uppercase cursor-pointer"
              >
                <span>{article.title}</span>
                <span>{article.subtitle}</span>
              </Link>
            );
          })
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

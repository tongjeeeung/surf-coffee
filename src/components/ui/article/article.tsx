import { easeInOut, motion } from "motion/react";
import { FC } from "react";
import { TArticle } from "../../../utils/types";

export const ArticleUI: FC<{ article: TArticle }> = ({ article }) => {
  return (
    <>
      <div
        key={article.id}
        className="text-xl lg:text-2xl flex flex-col gap-4 py-2 px-4 pb-8 tracking-wider text-justify overflow-hidden"
      >
        {article.id == "0" && "titleConclusion" in article ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="flex justify-center items-center text-center gap-4"
            >
              <div className="w-[60vw] text-base lg:text-xl xl:text-2xl">
                <h2 className="xl:text-4xl text-3xl text-center mb-4">
                  {article.title}
                </h2>
                <p>{article.about}</p>
              </div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="w-[40vw] h-[70vh]"
              >
                <img
                  className="object-cover object-center w-full h-full"
                  src={article.imgAbout}
                ></img>
              </motion.div>
            </motion.div>
            <div className="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-4 items-center w-full mb-4">
              {article.ul.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 2,
                    ease: easeInOut,
                    delay: index < 3 ? index : index - 3,
                  }}
                  className="col-span-1 row-span-1 border-[2px] w-full h-full border-solid border-text p-2 flex flex-col justify-between gap-4"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="text-base lg:text-lg xl:text-lg">
                        <h3>{item.liName}</h3>
                        <p>{item.liAbout}</p>
                        <span>{item.liAboutSub}</span>
                      </div>
                      <img
                        src={item.liImg}
                        className="object-cover object-center w-full h-[55vh] lg:h-[45vh] lx:h-[45vh]"
                        alt={item.liName}
                      />
                    </>
                  ) : (
                    <>
                      <img
                        src={item.liImg}
                        className="object-cover object-center w-full h-[55vh] lg:h-[45vh] lx:h-[45vh]"
                        alt={item.liName}
                      />
                      <div className="text-base lg:text-lg xl:text-lg">
                        <h3>{item.liName}</h3>
                        <p>{item.liAbout}</p>
                        <span>{item.liAboutSub}</span>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="flex flex-col gap-4 items-center text-base lg:text-xl xl:text-2xl"
            >
              <h2 className="text-2xl lg:text-3xl xl:text-4xl">
                {article.titleConclusion}
              </h2>
              <p>{article.textConclusion}</p>
            </motion.div>
          </>
        ) : (
          <></>
        )}
        {article.id == "1" && "secondAbout" in article ? (
          <>
            <div className="relative w-full h-[40vh] flex justify-center items-center">
              <img
                className="w-full h-full absolute top-0 bottom-0 z-[-1] object-center object-cover brightness-40"
                src={article.imgAbout}
              ></img>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="flex flex-col gap-2 text-center xl:text-4xl text-stext"
              >
                <h2 className="xl:text-6xl text-4xl">{article.title}</h2>
                <h3>{article.subtitle}</h3>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="flex gap-4"
            >
              <div className="flex gap-8 text-base lg:text-lg xl:text-2xl">
                <p>{article.about}</p>
                <p>{article.secondAbout}</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-[120vh] xl:h-[110vh] text-base lg:text-lg xl:text-2xl mb-4">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut, delay: 1 }}
                className="col-span-1 object-cover object-center w-full h-full"
                src={article.ul[0].liImg}
              ></motion.img>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut, delay: 2 }}
                className="col-span-1"
              >
                <h3>{article.ul[0].liName}</h3>
                <p>{article.ul[0].liAbout}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut, delay: 2 }}
                className="col-span-1"
              >
                <h3>{article.ul[1].liName}</h3>
                <p>{article.ul[1].liAbout}</p>
              </motion.div>
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut, delay: 1 }}
                className="col-span-1 w-full h-full object-cover object-center"
                src={article.ul[1].liImg}
              ></motion.img>
            </div>
            <div className="flex xl:gap-8 gap-4 text-base lg:text-lg xl:text-2xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
              >
                {article.textConclusion}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut, delay: 1 }}
              >
                {article.textSecondConclusion}
              </motion.p>
            </div>
          </>
        ) : (
          <></>
        )}
        {article.id == "2" &&
        "secondAbout" in article &&
        "titleConclusion" in article ? (
          <>
            <h2 className="lg:text-6xl text-4xl text-center mb-4">
              {article.title}
            </h2>
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
            <p className="text-center">{article.secondAbout}</p>
            <ul className="w-full flex flex-col gap-4 overflow-hidden">
              {article.ul.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ x: index % 2 === 0 ? -500 : 500, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeInOut }}
                  className="flex gap-4 items-center w-full h-[50vh] lg:text-xl xl:text-2xl text-sm"
                >
                  {(index % 2 === 0 && index !== 4) || index === 3 ? (
                    <>
                      <div className="flex flex-col gap-4 text-center w-[60vw]">
                        <h2 className="xl:text-4xl text-2xl uppercase">
                          {item.liName}
                        </h2>
                        <p>{item.liAbout}</p>
                      </div>
                      <div className="w-[40vw] h-full">
                        <img
                          src={item.liImg}
                          className="w-full h-full object-cover object-center"
                          alt={item.liName}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-[40vw] h-full">
                        <img
                          src={item.liImg}
                          className="w-full h-full object-cover object-center"
                          alt={item.liName}
                        />
                      </div>
                      <div className="flex flex-col gap-4 text-center w-[60vw]">
                        <h2 className="xl:text-4xl text-2xl uppercase">
                          {item.liName}
                        </h2>
                        <p>{item.liAbout}</p>
                      </div>
                    </>
                  )}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="flex flex-col gap-4 text-sm xl:text-2xl"
            >
              <h2 className="text-center xl:text-4xl text-2xl">
                {article.titleConclusion}
              </h2>
              <p className="text-center">{article.textConclusion}</p>
            </motion.div>
          </>
        ) : (
          <></>
        )}
        {article.id == "3" &&
        "ulDrinks" in article &&
        "titleFood" in article ? (
          <>
            <h2 className="xl:text-6xl text-4xl uppercase text-center">
              {article.title}
            </h2>
            <p className="text-center">{article.about}</p>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: easeInOut }}
              className="w-full h-[40vh] bg-[#ef261c]"
            >
              <img
                className="object-center w-full h-[90%] my-4"
                src={article.imgAbout}
              ></img>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="flex justify-between gap-4 mb-4"
            >
              <div className="flex flex-col gap-6 justify-center items-center w-[50%]">
                <h2 className="xl:text-5xl text-4xl uppercase">
                  {article.titleUl}
                </h2>
                <ul className="flex flex-col gap-4 justify-center items-center xl:text-3xl w-[80%]">
                  {article.ul.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ x: -200, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        ease: easeInOut,
                        delay: index,
                      }}
                      className="text-center"
                    >
                      <h3>{item.liName}</h3>
                      <span className="xl:text-2xl">{item.liAbout}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-4 grid-rows-4 xl:w-[60vw] w-[45vw] h-[100vh] xl:h-[90vh] mb-8">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 2, ease: easeInOut }}
                  viewport={{ once: true }}
                  className="object-cover col-span-3 object-center w-full h-full"
                  src={article.ul[0].liImg}
                ></motion.img>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeInOut, delay: 1 }}
                  className="object-cover col-span-2 object-center w-full h-full"
                  src={article.ul[1].liImg}
                ></motion.img>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeInOut, delay: 2 }}
                  className="object-cover col-span-2 object-center w-full h-full"
                  src={article.ul[2].liImg}
                ></motion.img>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeInOut, delay: 3 }}
                  className="object-cover col-span-4 object-center w-full h-full"
                  src={article.ul[3].liImg}
                ></motion.img>
                <div className="col-span-1"></div>
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: easeInOut, delay: 4 }}
                  className="object-cover col-span-3 object-center w-full h-full"
                  src={article.ul[4].liImg}
                ></motion.img>
              </div>
            </motion.div>
            <h2 className="text-4xl text-center uppercase">
              {article.titleDrinks}
            </h2>
            <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-[140vh] mb-8">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="col-span-2 row-span-3 overflow-hidden"
              >
                <img
                  className="object-center object-contain w-full h-full scale-[1.3]"
                  src={article.ulDrinks[0].liImg}
                />
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="col-span-2 row-span-1 flex flex-col items-center gap-2"
              >
                <h3 className="text-4xl">{article.ulDrinks[1].liName}</h3>
                <span className="xl:text-xl text-lg text-zinc-600">
                  {article.ulDrinks[1].liAboutSub}
                </span>
                <p className="lx:w-2/3 text-base xl:text-xl text-center">
                  {article.ulDrinks[1].liAbout}
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="col-span-2 row-span-3 overflow-hidden"
              >
                <img
                  className="object-center object-contain w-full h-full scale-[1.3]"
                  src={article.ulDrinks[1].liImg}
                  alt={article.ulDrinks[1].liName}
                />
              </motion.div>
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: easeInOut }}
                className="col-span-2 row-span-1 flex flex-col items-center gap-2"
              >
                <h3 className="text-4xl">{article.ulDrinks[0].liName}</h3>
                <span className="xl:text-xl text-lg text-zinc-600">
                  {article.ulDrinks[0].liAboutSub}
                </span>
                <p className="lx:w-2/3 text-base xl:text-xl text-center">
                  {article.ulDrinks[0].liAbout}
                </p>
              </motion.div>
            </div>
            <h2 className="text-4xl text-center uppercase">
              {article.titleFood}
            </h2>
            <motion.div
              initial={{ y: 300, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="grid grid-cols-1 grid-rows-2 gap-4 w-full h-[140vh] mb-4"
            >
              <div className="col-span-2 row-span-3 overflow-hidden">
                <img
                  className="object-center object-contain w-full h-full scale-[1.5]"
                  src={article.liFood.liImg}
                  alt={article.liFood.liName}
                />
              </div>
              <div className="col-span-2 row-span-1 flex flex-col items-center gap-2">
                <h3 className="text-4xl">{article.liFood.liName}</h3>
                <p className="w-2/3 text-base xl:text-xl text-center">
                  {article.liFood.liAbout}
                </p>
              </div>
            </motion.div>
          </>
        ) : (
          <></>
        )}
        {article.id == "4" && "titleUl" in article && "liVideo" in article ? (
          <>
            <h2 className="text-4xl xl:text-5xl text-center">
              {article.title}
            </h2>
            <h3 className="text-center">{article.subtitle}</h3>
            <p>{article.about}</p>
            <motion.div
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="w-full h-[40vh]"
            >
              <img
                className="object-center object-cover w-full h-full"
                src={article.imgAbout}
              ></img>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut, delay: 2 }}
              className="flex justify-between gap-4 mb-4"
            >
              <div className="flex flex-col gap-6 justify-center items-center w-[50%]">
                <h2 className="text-3xl xl:text-5xl">{article.titleUl}</h2>
                <ul className="flex flex-col gap-4 justify-center items-center text-2xl xl:text-3xl xl:w-[80%]">
                  {article.ul.map((li, index) => {
                    return (
                      <motion.li
                        key={index}
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 2,
                          ease: easeInOut,
                          delay: 2 + index,
                        }}
                        className="text-center"
                      >
                        <h3>{li.liName}</h3>
                        <span className="text-lg lg:text-xl xl:text-2xl">
                          {li.liAbout}
                        </span>
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
              <div className="grid grid-cols-4 grid-rows-3 gap-4 w-[60vw] lg:h-[110vh] xl:h-[110vh]">
                {article.ul.map((item, index) => (
                  <motion.img
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      delay: index + 2,
                    }}
                    className={`object-cover col-span-${index === 0 ? 4 : index === 3 ? 3 : 2} object-center w-full h-full`}
                    src={item.liImg}
                    alt={`Image of ${item.liName}`}
                  />
                ))}
              </div>
            </motion.div>
            <h2 className="text-4xl text-center mb-4">
              {article.liVideo.liName}
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: easeInOut }}
              className="grid grid-cols-2 grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-4 w-full h-[140vh] lg:h-[130vh] text-base xl:text-xl lg:text-lg xl:h-[130vh]"
            >
              <motion.div
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut, delay: 2 }}
                className="col-span-2"
              >
                <video
                  className="object-cover w-full h-full"
                  autoPlay
                  muted
                  loop
                >
                  <source src={article.liVideo.liImg} type="video/mp4" />
                </video>
              </motion.div>
              <motion.p
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut, delay: 3 }}
                className="col-span-1"
              >
                {article.liVideo.liAbout}
              </motion.p>
              <motion.p
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut, delay: 4 }}
                className="col-span-1"
              >
                {article.liVideo.liAboutSub}
              </motion.p>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 2, ease: easeInOut, delay: 5 }}
                className="col-span-2"
              >
                {article.textConclusion}
              </motion.p>
            </motion.div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

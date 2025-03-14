import { FC } from "react";

export const FooterUI: FC = () => {
  return (
    <footer className="relative flex justify-between border-t-[2px] border-solid border-black xl:h-[10vh] h-[15vh] py-2 px-4 bg-zinc-800 text-sm xl:text-base text-stext items-center">
      <address className="flex flex-col xl:flex-row gap-2 xl:gap-4">
        <a
          href="tel:+74953254522"
          className="duration-300 transition-all ease-in-out hover:text-accent"
        >
          +7 495 325 45 22
        </a>
        <a
          href="mailto:tngtng@gmail.com"
          className="duration-300 transition-all ease-in-out hover:text-accent"
        >
          tngtng@gmail.com
        </a>
        <a
          href="https://yandex.ru/maps/-/CDTqi4Z8"
          className="duration-300 transition-all ease-in-out hover:text-accent"
        >
          Moscow, Bekhtereva, 15
        </a>
      </address>
      <span className="absolute left-[43%] lg:left-[45%] xl:left-[46.5%] font-[Lovelies] text-xl cursor-default">
        By Btlushka
      </span>
      <div className="flex gap-2">
        <a href="https://t.me/tongjeeeung">
          <img
            className="w-7 h-7 rounded-[50%] border-stext bg-stext p-[1px] hover:bg-accent duration-300 transition-all ease-in-out"
            src="/public/iconTg.svg"
          />
        </a>
        <a href="https://github.com/tongjeeeung">
          <img
            className="w-7 h-7 rounded-[50%] border-stext bg-stext p-[1px] hover:bg-accent duration-300 transition-all ease-in-out"
            src="/public/iconGithub.svg"
          />
        </a>
      </div>
    </footer>
  );
};

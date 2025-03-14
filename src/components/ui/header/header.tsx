import { FC } from "react";
import { Link } from "react-router-dom";

export const HeaderUI: FC = () => {
  return (
    <header className="w-full h-[12vh] px-4 py-2 border-b-solid border-b-[2px] border-b-black lg:text-xl xl:text-2xl">
      <nav className="w-full h-full flex justify-between items-center">
        <Link to={"/surf-coffee"} className="cursor-pointer">
          <span className="font-[Lovelies]">Surf Coffee</span>
        </Link>
        <ul className="flex gap-4 justify-between">
          <li className="cursor-pointer duration-300 transition-all ease-in-out hover:text-[var(--color-accent)] hover:duration-300 hover:transition-all hover:ease-in-out">
            <a href="https://tongjeeeung.github.io/cherry-shop-vue/">Магазин</a>
          </li>
          <li className="cursor-pointer duration-300 transition-all ease-in-out hover:text-[var(--color-accent)] hover:duration-300 hover:transition-all hover:ease-in-out">
            <a href="https://tongjeeeung.github.io/swag-music-react/">Музыка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

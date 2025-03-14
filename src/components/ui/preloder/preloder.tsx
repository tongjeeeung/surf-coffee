import { FC } from "react";

export const PreloaderUI: FC = () => (
  <div className="flex-grow flex items-center justify-center min-h-[100vh]">
    <div className="block w-[6rem] h-[6rem] border-[2px] border-solid border-t-text border-r-text border-b-accent border-l-stext rounded-[50%] animate-spin" />
  </div>
);

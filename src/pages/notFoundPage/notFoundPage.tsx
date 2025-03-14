import { motion } from "motion/react";
import { FC } from "react";
import { Ribbon } from "../../components";
import { useNavigate } from "react-router-dom";

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="text-4xl text-center flex flex-col gap-4 items-center justify-center h-[100vh] cursor-default">
      <h1 className="font-[Lovelies]">Surf Coffee</h1>
      <h2>Здесь нечего нет, прости дружище!</h2>
      <h3>Попробуй перейти на главную, может там найдешь, что ищешь</h3>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          navigate("/surf-coffee");
        }}
        className="text-xl w-[12vw] py-2 px-2 border-solid border-[2px] cursor-pointer border-text"
      >
        Главная
      </motion.button>
      <Ribbon></Ribbon>
    </div>
  );
};

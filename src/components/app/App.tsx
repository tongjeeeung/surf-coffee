import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer";
import { Header } from "../header";
import { ArticlePage, HomePage, NotFoundPage } from "../../pages";
import { useEffect } from "react";
import { useDispatch } from "../../services/store";
import { getArticlesThunk } from "../../services/articlesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticlesThunk());
  }, []);

  return (
    <>
      <Header></Header>
      <main className="min-h-[100vh] overflow-hidden">
        <Routes>
          <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
          <Route path="/surf-coffee" element={<HomePage></HomePage>}></Route>
          <Route
            path="/surf-coffee/article/:id"
            element={<ArticlePage></ArticlePage>}
          ></Route>
        </Routes>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;

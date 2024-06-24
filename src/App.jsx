import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HOME from "./pages/HOME";
import HOMESELLER from "./pages/HOMESELLER";
import CATEGORIESWITHINFORM from "./pages/CATEGORIESWITHINFORM";
import CATEGORIES from "./pages/CATEGORIES";
import SEARCH from "./pages/SEARCH";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homeseller":
        title = "";
        metaDescription = "";
        break;
      case "/categories-within-form":
        title = "";
        metaDescription = "";
        break;
      case "/categories":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HOME />} />
      <Route path="/homeseller" element={<HOMESELLER />} />
      <Route
        path="/categories-within-form"
        element={<CATEGORIESWITHINFORM />}
      />
      <Route path="/categories" element={<CATEGORIES />} />
      <Route path="/search" element={<SEARCH />} />
    </Routes>
  );
}
export default App;

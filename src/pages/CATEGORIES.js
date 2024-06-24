import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MainSidebar from "../components/MainSidebar";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import styles from "./CATEGORIES.module.css";

const CATEGORIES = () => {
  const navigate = useNavigate();

  const onLeftArrowSvgrepoCom1IconClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div className={styles.categories}>
      <div className={styles.primaryContent}>
        <div className={styles.leftArrowSvgrepoCom1Parent}>
          <img
            className={styles.leftArrowSvgrepoCom1Icon}
            loading="lazy"
            alt=""
            src="/leftarrowsvgrepocom-1.svg"
            onClick={onLeftArrowSvgrepoCom1IconClick}
          />
          <a className={styles.categories1}>Categories</a>
        </div>
      </div>
      <MainSidebar />
      <FrameComponent6 />
      <div className={styles.categoriesChild} />
      <section className={styles.categoryNavigationParent}>
        <div className={styles.categoryNavigation}>
          <div className={styles.navigationDots}>
            <div className={styles.navigationDotsChild} />
            <div className={styles.navigationDotsItem} />
            <div className={styles.navigationDotsInner} />
          </div>
        </div>
        <div className={styles.categoryList}>
          <div className={styles.navigation}>
            <a className={styles.masonry}>Masonry</a>
            <div className={styles.concreteReady}>Concrete Ready</div>
            <div className={styles.plasterMortar}>{`Plaster & Mortar`}</div>
          </div>
          <img className={styles.categorySeparatorIcon} loading="lazy" alt="" />
        </div>
        <FrameComponent5 />
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.redClayBlocks}>Red Clay Blocks</div>
            <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
          </div>
        </div>
      </section>
      <FrameComponent4 />
    </div>
  );
};

export default CATEGORIES;

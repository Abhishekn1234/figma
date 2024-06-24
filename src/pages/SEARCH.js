import { useCallback } from "react";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./SEARCH.module.css";

const SEARCH = () => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "PRODUCT DETAILS" to the project
  }, []);

  return (
    <div className={styles.search}>
      <FrameComponent9 />
      <img className={styles.searchChild} alt="" src="/star-8.svg" />
      <div className={styles.searchItem} />
      <img className={styles.searchInner} alt="" src="/star-8.svg" />
      <main className={styles.frameParent}>
        <nav className={styles.frameGroup}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.topRated}>Top Rated</div>
          </button>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <h3 className={styles.offers}>Offers</h3>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameInner} />
            <h3 className={styles.priceLow}>Price: Low</h3>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.rectangleDiv} />
            <h3 className={styles.priceLow1}>Price: Low</h3>
          </div>
        </nav>
        <section className={styles.frameContainer}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.groupDiv} onClick={onGroupContainerClick}>
                <div className={styles.frameChild1} />
                <img className={styles.starIcon} alt="" src="/star-8.svg" />
                <FrameComponent8 heart="/heart@2x.png" description="-30%" />
                <div className={styles.cementBagsWrapper}>
                  <h2 className={styles.cementBags}>Cement Bags</h2>
                </div>
                <div className={styles.starRatingParent}>
                  <div className={styles.starRating}>
                    <img
                      className={styles.starsIcon}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.starsIcon1}
                      loading="lazy"
                      alt=""
                      src="/star-8.svg"
                    />
                    <img
                      className={styles.starsIcon2}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.starsIcon3}
                      loading="lazy"
                      alt=""
                      src="/star-8.svg"
                    />
                    <img
                      className={styles.starsIcon4}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <div className={styles.kg}>25 KG</div>
                  </div>
                  <div className={styles.reviewsWrapper}>
                    <div className={styles.reviews}>4.9 (374 Reviews)</div>
                  </div>
                </div>
                <div className={styles.separator}>$ 2.50</div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.frameParent3}>
                  <FrameComponent8
                    heart="/heartsvgrepocom-3.svg"
                    description="-20%"
                  />
                  <div className={styles.cementBagsParent}>
                    <h2 className={styles.cementBags1}>Cement Bags</h2>
                    <div className={styles.frameParent4}>
                      <div className={styles.starRatingGroup}>
                        <div className={styles.starRating1}>
                          <img
                            className={styles.starsIcon5}
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.starsIcon6}
                            loading="lazy"
                            alt=""
                            src="/star-8.svg"
                          />
                          <img
                            className={styles.starsIcon7}
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <img
                            className={styles.starsIcon8}
                            loading="lazy"
                            alt=""
                            src="/star-8.svg"
                          />
                          <img
                            className={styles.starsIcon9}
                            loading="lazy"
                            alt=""
                            src="/star-1.svg"
                          />
                          <div className={styles.kg1}>25 KG</div>
                        </div>
                        <div className={styles.reviewsContainer}>
                          <div className={styles.reviews1}>
                            4.6 (174 Reviews)
                          </div>
                        </div>
                      </div>
                      <div className={styles.separator1}>$ 2.80</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.rectangleParent1}>
              <div className={styles.frameChild2} />
              <FrameComponent8
                heart="/heartsvgrepocom-3.svg"
                description="-30%"
              />
              <div className={styles.frameParent5}>
                <div className={styles.cementBagsContainer}>
                  <h2 className={styles.cementBags2}>Cement Bags</h2>
                </div>
                <div className={styles.kgParent}>
                  <div className={styles.kg2}>25 KG</div>
                  <div className={styles.starRating2}>
                    <img
                      className={styles.starsIcon10}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.starsIcon11}
                      loading="lazy"
                      alt=""
                      src="/star-8.svg"
                    />
                    <img
                      className={styles.starsIcon12}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                    <img
                      className={styles.starsIcon13}
                      alt=""
                      src="/star-8.svg"
                    />
                    <div className={styles.starIconWrapper}>
                      <img
                        className={styles.starIcon1}
                        loading="lazy"
                        alt=""
                        src="/star-1.svg"
                      />
                    </div>
                    <div className={styles.reviewsFrame}>
                      <div className={styles.reviews2}>4.9 (374 Reviews)</div>
                    </div>
                  </div>
                </div>
                <div className={styles.separator2}>$ 2.50</div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
        </section>
      </main>
    </div>
  );
};

export default SEARCH;

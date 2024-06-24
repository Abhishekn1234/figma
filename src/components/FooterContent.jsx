import PropTypes from "prop-types";
import styles from "./FooterContent.module.css";

const FooterContent = ({ className = "" }) => {
  return (
    <div className={[styles.footerContent, className].join(" ")}>
      <div className={styles.categoryContainers}>
        <div className={styles.categoryNames}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.brickwork1Icon}
              loading="lazy"
              alt=""
              src="/brickwork-1@2x.png"
            />
          </div>
          <div className={styles.chemicalsIndicators}>
            <div className={styles.masonry}>Masonry</div>
          </div>
        </div>
        <div className={styles.concreteReadyParent}>
          <div className={styles.concreteReady}>
            <p className={styles.concrete}>{`Concrete `}</p>
            <p className={styles.ready}>Ready</p>
          </div>
          <div className={styles.chemicalsNavigation}>
            <div className={styles.concreteSteelTypesWrapper}>
              <div className={styles.concreteSteelTypes}>
                <div className={styles.concreteSteelTypesInner}>
                  <div className={styles.frameItem} />
                </div>
                <img
                  className={styles.concreteMixer1Icon}
                  loading="lazy"
                  alt=""
                  src="/concretemixer-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.constructionChemicalsParent}>
          <div className={styles.constructionChemicals}>
            <p className={styles.construction}>Construction</p>
            <p className={styles.chemicals}>Chemicals</p>
          </div>
          <div className={styles.chemicalsNavContainerWrapper}>
            <div className={styles.chemicalsNavContainer}>
              <div className={styles.mortar}>
                <div className={styles.indicatorsParent}>
                  <div className={styles.indicators} />
                  <div className={styles.indicators1} />
                  <div className={styles.indicators2} />
                </div>
              </div>
              <div className={styles.imageContainerWrapper}>
                <div className={styles.imageContainer}>
                  <div className={styles.imageContainerInner}>
                    <div className={styles.frameInner} />
                  </div>
                  <img
                    className={styles.oil1Icon}
                    loading="lazy"
                    alt=""
                    src="/oil-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.categoryNames1}>
          <div className={styles.steelSpacersScaffoldingContainer}>
            <p className={styles.steelSpacers}>Steel, Spacers</p>
            <p className={styles.scaffolding}>Scaffolding</p>
          </div>
          <div className={styles.categoryNames2}>
            <div className={styles.categoryNamesInner}>
              <div className={styles.frameParent}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.rectangleDiv} />
                </div>
                <img
                  className={styles.steel1Icon}
                  loading="lazy"
                  alt=""
                  src="/steel-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.categoriesList}>
          <div className={styles.frameGroup}>
            <div className={styles.plasteringWrapper}>
              <div className={styles.plastering}>
                <div className={styles.plasteringInner}>
                  <div className={styles.frameChild1} />
                </div>
                <img
                  className={styles.plastering1Icon}
                  loading="lazy"
                  alt=""
                  src="/plastering-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.plasterMortarWrapper}>
              <div className={styles.plasterMortar}>{`Plaster & mortar`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterContent.propTypes = {
  className: PropTypes.string,
};

export default FooterContent;

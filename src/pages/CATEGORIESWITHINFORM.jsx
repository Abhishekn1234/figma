import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Content from "../components/Content";
import Flooring from "../components/Flooring";
import FooterContent from "../components/FooterContent";
import styles from "./CATEGORIESWITHINFORM.module.css";

const CATEGORIESWITHINFORM = () => {
  const navigate = useNavigate();

  const onCATEGORIESWITHINFORMClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  return (
    <div
      className={styles.categoriesWithinForm}
      onClick={onCATEGORIESWITHINFORMClick}
    >
      <div className={styles.categoriesWithinFormChild} />
      <div className={styles.categoriesWithinFormItem} />
      <div className={styles.categoriesWithinFormInner} />
      <div className={styles.cementBags}>Cement Bags</div>
      <div className={styles.kg}>25 KG</div>
      <div className={styles.div}>$ 2.50</div>
      <div className={styles.div1}>-30%</div>
      <img
        className={styles.addSquareSvgrepoCom2Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <Content />
      <section className={styles.bottomSeparator} />
      <section className={styles.footer}>
        <Flooring />
        <div className={styles.topCategoriesParent}>
          <div className={styles.topCategories}>
            <div className={styles.topCategoriesHeader}>
              <img
                className={styles.topCategoriesHeaderItems}
                loading="lazy"
                alt=""
                src="/rectangle-38@2x.png"
              />
            </div>
            <img
              className={styles.categoryImageIcon}
              loading="lazy"
              alt=""
              src="/rectangle-36@2x.png"
            />
            <div className={styles.masonryTypes}>
              <img
                className={styles.masonryTypesChild}
                loading="lazy"
                alt=""
                src="/rectangle-37@2x.png"
              />
            </div>
          </div>
          <FooterContent />
        </div>
        <div className={styles.flooringTypesWrapper}>
          <div className={styles.flooringTypes}>
            <div className={styles.parquetConcreteWrapper}>
              <div className={styles.parquetConcrete}>
                <div className={styles.parquetConcreteInner}>
                  <div className={styles.frameChild} />
                </div>
                <img
                  className={styles.concrete1Icon}
                  loading="lazy"
                  alt=""
                  src="/concrete-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <img
                className={styles.parquet1Icon}
                loading="lazy"
                alt=""
                src="/parquet-1@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.chemicals}>
        <div className={styles.whiteWood}>White-wood</div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleWrapper}>
              <div className={styles.frameInner} />
            </div>
            <img
              className={styles.planning1Icon}
              alt=""
              src="/planning-1@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
            </div>
            <img
              className={styles.drywall1Icon}
              alt=""
              src="/drywall-1@2x.png"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild1} />
            <img className={styles.cement1Icon} alt="" src="/cement-1@2x.png" />
          </div>
          <div className={styles.cementSandContainer}>
            <p className={styles.cement}>{`Cement &`}</p>
            <p className={styles.sand}>Sand</p>
          </div>
          <div className={styles.landscape}>Landscape</div>
          <div className={styles.drywallGypsumContainer}>
            <p className={styles.drywall}>{`Drywall &`}</p>
            <p className={styles.gypsum}>Gypsum</p>
          </div>
          <div className={styles.precast}>Precast</div>
          <div className={styles.groupDiv}>
            <div className={styles.frameChild2} />
            <div className={styles.div2}>-30%</div>
          </div>
          <div className={styles.frameChild3} />
          <div className={styles.div3}>-25%</div>
          <div className={styles.frameChild4} />
          <div className={styles.thermalInsulatedConcreteBloParent}>
            <h2 className={styles.thermalInsulatedConcrete}>
              Thermal Insulated Concrete Blocks
            </h2>
            <div className={styles.blocksTypes}>
              <div
                className={styles.lightWeightBlocks}
              >{`Light Weight Blocks `}</div>
            </div>
            <div className={styles.blocksTypes1}>
              <div className={styles.solidBlocksNormal}>
                Solid Blocks Normal Weight
              </div>
            </div>
            <div className={styles.interlocksPavingsWrapper}>
              <div
                className={styles.interlocksPavings}
              >{`Interlocks & Pavings`}</div>
            </div>
            <div className={styles.kerbstoneHeelkerbWheelSWrapper}>
              <h2
                className={styles.kerbstoneHeelkerb}
              >{`Kerbstone & Heelkerb & Wheel S...`}</h2>
            </div>
          </div>
          <div className={styles.kerbstoneImage}>
            <div className={styles.kerbstoneImageChild} />
            <div className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CATEGORIESWITHINFORM;

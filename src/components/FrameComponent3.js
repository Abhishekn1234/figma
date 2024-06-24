import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "SALES REPORT" to the project
  }, []);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "PRODUCT LIST" to the project
  }, []);

  return (
    <section className={[styles.salesHeaderWrapper, className].join(" ")}>
      <div className={styles.salesHeader}>
        <h3 className={styles.todaysSales}>Today’s sales</h3>
        <div className={styles.salesChart}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.lineDiv} />
            <div className={styles.frameChild1} />
            <div className={styles.frameChild2} />
            <div className={styles.frameChild3} />
            <div className={styles.frameChild4} />
            <div className={styles.frameChild5} />
          </div>
          <div className={styles.depth6Frame0}>
            <img
              className={styles.detailIcons}
              alt=""
              src="/detail-icons.svg"
            />
            <img
              className={styles.detailIcons1}
              alt=""
              src="/detail-icons1.svg"
            />
            <img className={styles.detailIcons2} loading="lazy" alt="" />
            <div className={styles.depth7Frame0}>
              <div className={styles.depth7Frame1} />
            </div>
          </div>
        </div>
        <div className={styles.shortcutsWrapper}>
          <h3 className={styles.shortcuts}>Shortcuts</h3>
        </div>
        <div className={styles.frameParent}>
          <div
            className={styles.rectangleGroup}
            onClick={onGroupContainerClick}
          >
            <div className={styles.rectangleDiv} />
            <div className={styles.salesIconWrapper}>
              <img
                className={styles.salesIcon}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.sales}> Sales</div>
          </div>
          <div
            className={styles.rectangleContainer}
            onClick={onGroupContainerClick1}
          >
            <div className={styles.frameChild6} />
            <div className={styles.goodsFilledSvgrepoCom1Wrapper}>
              <img
                className={styles.goodsFilledSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/goodsfilledsvgrepocom-1.svg"
              />
            </div>
            <div className={styles.products}>Products</div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;

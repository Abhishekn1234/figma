import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "STOCKS" to the project
  }, []);

  return (
    <section className={[styles.ordersHeaderParent, className].join(" ")}>
      <div className={styles.ordersHeader}>
        <div className={styles.ordersTitle}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <img
              className={styles.boxSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/boxsvgrepocom-11.svg"
            />
            <div className={styles.orders}>Orders</div>
          </div>
        </div>
        <h3 className={styles.todaysOrders}>Today’s Orders</h3>
      </div>
      <div className={styles.rectangleGroup} onClick={onGroupContainerClick}>
        <div className={styles.frameItem} />
        <div className={styles.stockOutSvgrepoCom11Wrapper}>
          <img
            className={styles.stockOutSvgrepoCom11}
            loading="lazy"
            alt=""
            src="/stockoutsvgrepocom-1-1.svg"
          />
        </div>
        <div className={styles.stocks}>Stocks</div>
      </div>
      <img
        className={styles.bottomIcon}
        loading="lazy"
        alt=""
        src="/vector-1.svg"
      />
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;

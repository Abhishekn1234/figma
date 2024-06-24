import PropTypes from "prop-types";
import styles from "./GroupComponent4.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.parent, className].join(" ")}>
      <div className={styles.div}>$ 1.30</div>
      <div className={styles.newArrivals}>New Arrivals</div>
      <img
        className={styles.rightCircleSvgrepoCom3Icon}
        alt=""
        src="/rightcirclesvgrepocom-3.svg"
      />
      <div className={styles.frameChild} />
      <div className={styles.homeButton}>
        <div className={styles.homeDetails}>
          <div className={styles.categoryDetails}>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/home.svg"
            />
          </div>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.categoriesButton}>
          <div className={styles.orderIcon}>
            <img
              className={styles.categorySvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/categorysvgrepocom-1.svg"
            />
          </div>
          <div className={styles.categories}>Categories</div>
        </div>
      </div>
      <div className={styles.profileButton}>
        <div className={styles.orderDetails}>
          <div className={styles.ordersButton}>
            <img
              className={styles.boxSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/boxsvgrepocom-1.svg"
            />
          </div>
          <div className={styles.orders}>Orders</div>
        </div>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.profileParent}>
          <div className={styles.profile}>Profile</div>
          <img
            className={styles.profileSvgrepoCom1Icon}
            loading="lazy"
            alt=""
            src="/profilesvgrepocom-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;

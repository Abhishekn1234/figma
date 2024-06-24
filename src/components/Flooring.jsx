import PropTypes from "prop-types";
import styles from "./Flooring.module.css";

const Flooring = ({ className = "" }) => {
  return (
    <header className={[styles.flooring, className].join(" ")}>
      <div className={styles.locationSearch}>
        <div className={styles.topCategoriesHeader}>
          <div className={styles.frameParent}>
            <img className={styles.frameChild} alt="" src="/group-24@2x.png" />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/group-25@2x.png"
            />
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.location}>
            <div className={styles.searchDetails}>
              <img
                className={styles.locationPinSvgrepoCom1Icon}
                alt=""
                src="/locationpinsvgrepocom-1.svg"
              />
              <a className={styles.kochiIndia}>Kochi, India</a>
              <img
                className={styles.downChevronSvgrepoCom1Icon}
                alt=""
                src="/downchevronsvgrepocom-1.svg"
              />
            </div>
          </div>
          <div className={styles.cart}>
            <img
              className={styles.searchCircleStreamlineUltiIcon}
              loading="lazy"
              alt=""
              src="/searchcirclestreamlineultimatesvg.svg"
            />
            <div className={styles.searchIcon}>
              <img
                className={styles.shoppingCartSvgrepoCom1Icon}
                loading="lazy"
                alt=""
                src="/shoppingcartsvgrepocom-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Flooring.propTypes = {
  className: PropTypes.string,
};

export default Flooring;

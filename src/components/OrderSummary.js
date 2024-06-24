import PropTypes from "prop-types";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ className = "" }) => {
  return (
    <section className={[styles.orderSummary, className].join(" ")}>
      <div className={styles.orderDetails}>
        <div className={styles.orderFromContainer}>
          <span>Order from :</span>
          <span className={styles.kottayam}>{` Kottayam  `}</span>
        </div>
        <div className={styles.kg}>(25 KG)</div>
        <div className={styles.quantity2Container}>
          <span>Quantity</span>
          <span className={styles.span}>{` `}</span>
          <span>- 2</span>
        </div>
        <div className={styles.cementBags}>Cement Bags</div>
        <div className={styles.imagePlaceholderParent}>
          <div className={styles.imagePlaceholder} />
          <div className={styles.imageContent}>
            <div className={styles.imageContentChild} />
            <div className={styles.wrapperIstockphoto476199756}>
              <img
                className={styles.istockphoto476199756612x612Icon}
                loading="lazy"
                alt=""
                src="/istockphoto476199756612x612removebgpreview-2@2x.png"
              />
            </div>
          </div>
          <img
            className={styles.summaryIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
      </div>
    </section>
  );
};

OrderSummary.propTypes = {
  className: PropTypes.string,
};

export default OrderSummary;

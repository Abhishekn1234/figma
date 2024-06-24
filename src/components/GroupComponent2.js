import { useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "PRODUCT DETAILS" to the project
  }, []);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      onClick={onGroupContainerClick}
    >
      <div className={styles.groupChild} />
      <div className={styles.wrapperIstockphoto476199756}>
        <img
          className={styles.istockphoto476199756612x612Icon}
          alt=""
          src="/istockphoto476199756612x612removebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.cementBagsParent}>
        <div className={styles.cementBags}>Cement Bags</div>
        <div className={styles.kg}>25 KG</div>
      </div>
      <div className={styles.weightUnit}>$ 2.50</div>
      <img
        className={styles.addSquareSvgrepoCom1Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;

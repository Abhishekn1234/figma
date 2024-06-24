import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/categories");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "ORDERS" to the project
  }, []);

  const onGroupContainerClick2 = useCallback(() => {
    // Please sync "PROFILE" to the project
  }, []);

  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.groupChild} />
      <div className={styles.homeParent}>
        <img className={styles.homeIcon} alt="" src="/home.svg" />
        <div className={styles.home}>Home</div>
      </div>
      <div
        className={styles.categorySvgrepoCom1Parent}
        onClick={onGroupContainerClick}
      >
        <img
          className={styles.categorySvgrepoCom1Icon}
          alt=""
          src="/categorysvgrepocom-1.svg"
        />
        <div className={styles.categories}>Categories</div>
      </div>
      <div
        className={styles.boxSvgrepoCom1Parent}
        onClick={onGroupContainerClick1}
      >
        <img
          className={styles.boxSvgrepoCom1Icon}
          alt=""
          src="/boxsvgrepocom-1.svg"
        />
        <div className={styles.orders}>Orders</div>
      </div>
      <div className={styles.profileParent} onClick={onGroupContainerClick2}>
        <div className={styles.profile}>Profile</div>
        <img
          className={styles.profileSvgrepoCom1Icon}
          alt=""
          src="/profilesvgrepocom-1.svg"
        />
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;

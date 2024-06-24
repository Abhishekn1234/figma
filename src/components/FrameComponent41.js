import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./FrameComponent41.module.css";

const FrameComponent4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onGroupContainerClick1 = useCallback(() => {
    // Please sync "ORDERS" to the project
  }, []);

  const onGroupContainerClick2 = useCallback(() => {
    // Please sync "PROFILE" to the project
  }, []);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.contactInfoButtonWrapper}>
        <div className={styles.contactInfoButton}>
          <div className={styles.contactInfoButtonChild} />
          <div className={styles.hollowBlocks}>Hollow Blocks</div>
          <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
        </div>
      </div>
      <footer className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div
          className={styles.homeButtonParent}
          onClick={onGroupContainerClick}
        >
          <div className={styles.homeButton}>
            <img
              className={styles.homeIcon}
              loading="lazy"
              alt=""
              src="/home1.svg"
            />
          </div>
          <a className={styles.home}>Home</a>
        </div>
        <div className={styles.actionButtons}>
          <div className={styles.buttonIcons}>
            <img
              className={styles.categorySvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/categorysvgrepocom-11.svg"
            />
          </div>
          <div className={styles.categories}>Categories</div>
        </div>
        <div className={styles.frameGroup} onClick={onGroupContainerClick1}>
          <div className={styles.boxSvgrepoCom1Wrapper}>
            <img
              className={styles.boxSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/boxsvgrepocom-1.svg"
            />
          </div>
          <div className={styles.orders}>Orders</div>
        </div>
        <div
          className={styles.profileButtonWrapper}
          onClick={onGroupContainerClick2}
        >
          <div className={styles.profileButton}>
            <div className={styles.profile}>Profile</div>
            <img
              className={styles.profileSvgrepoCom1Icon}
              loading="lazy"
              alt=""
              src="/profilesvgrepocom-1.svg"
            />
          </div>
        </div>
      </footer>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;

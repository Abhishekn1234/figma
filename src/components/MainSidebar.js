import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MainSidebar.module.css";

const MainSidebar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/search");
  }, [navigate]);

  return (
    <div className={[styles.mainSidebar, className].join(" ")}>
      <div className={styles.searchInputParent} onClick={onGroupContainerClick}>
        <div className={styles.searchInput}>
          <div className={styles.searchInputField}>
            <div className={styles.searchInputFieldChild} />
            <input
              className={styles.searchInputFieldItem}
              placeholder="Search"
              type="text"
            />
            <img
              className={styles.searchCircleStreamlineUltiIcon}
              alt=""
              src="/searchcirclestreamlineultimatesvg1.svg"
            />
          </div>
        </div>
        <div className={styles.filterButton}>
          <div className={styles.filterButtonChild} />
          <img
            className={styles.adjustSvgrepoCom1Icon}
            loading="lazy"
            alt=""
            src="/adjustsvgrepocom-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

MainSidebar.propTypes = {
  className: PropTypes.string,
};

export default MainSidebar;

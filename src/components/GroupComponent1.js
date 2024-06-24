import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ className = "", propTop }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div className={styles.groupChild} />
      <div className={styles.aacBlocksParent}>
        <div className={styles.aacBlocks}>AAC Blocks</div>
        <div className={styles.x100X}>200 x 100 x 150</div>
      </div>
      <div className={styles.div}>$ 1.50</div>
      <div className={styles.cementNameImage} />
      <div className={styles.cementWeight}>-25%</div>
      <div className={styles.wrapperImage202305241255152}>
        <img
          className={styles.image202305241255152RemovebIcon}
          alt=""
          src="/image202305241255152removebgpreview-1@2x.png"
        />
      </div>
      <div className={styles.groupItem} />
      <div className={styles.aacBlocksGroup}>
        <div className={styles.aacBlocks1}>AAC Blocks</div>
        <div className={styles.x100X1}>200 x 100 x 150</div>
      </div>
      <div className={styles.currencySymbol}>$ 1.50</div>
      <div className={styles.discountBackground} />
      <div className={styles.discountPercentage}>-25%</div>
      <div className={styles.wrapperImage2023052412551521}>
        <img
          className={styles.image202305241255152RemovebIcon1}
          alt=""
          src="/image202305241255152removebgpreview-1@2x.png"
        />
      </div>
      <img
        className={styles.addSquareSvgrepoCom3Icon}
        alt=""
        src="/addsquaresvgrepocom-3.svg"
      />
      <img
        className={styles.addSquareSvgrepoCom4Icon}
        alt=""
        src="/addsquaresvgrepocom-3.svg"
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent1;

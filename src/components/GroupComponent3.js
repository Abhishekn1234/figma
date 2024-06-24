import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent3.module.css";

const GroupComponent3 = ({ className = "", propLeft, propMinWidth }) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.groupChild} />
      <div className={styles.aacBlocksParent}>
        <div className={styles.aacBlocks}>AAC Blocks</div>
        <div className={styles.x100X}>200 x 100 x 150</div>
      </div>
      <div className={styles.div}>$ 1.50</div>
      <div className={styles.groupItem} />
      <div className={styles.div1} style={divStyle}>
        -25%
      </div>
      <img
        className={styles.addSquareSvgrepoCom3Icon}
        alt=""
        src="/addsquaresvgrepocom-2.svg"
      />
      <div className={styles.wrapperImage202305241255152}>
        <img
          className={styles.image202305241255152RemovebIcon}
          alt=""
          src="/image202305241255152removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent3;

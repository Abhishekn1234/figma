import FrameComponent from "./FrameComponent";
import BottomBar from "./BottomBar";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./Content.module.css";

const Content = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.frameParent}>
        <FrameComponent />
        <BottomBar />
        <div className={styles.categoryNames}>
          <GroupComponent1 />
          <GroupComponent />
        </div>
      </div>
      <div className={styles.barRightWrapper}>
        <div className={styles.barRight} />
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;

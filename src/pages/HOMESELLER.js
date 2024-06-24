import { useCallback } from "react";
import RightPanel from "../components/RightPanel";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import OrderSummary from "../components/OrderSummary";
import styles from "./HOMESELLER.module.css";

const HOMESELLER = () => {
  const onEditProfileBtnClick = useCallback(() => {
    // Please sync "SELLER PROFILE FORM" to the project
  }, []);

  return (
    <div className={styles.homeSeller}>
      <RightPanel />
      <div className={styles.depth4Frame1} />
      <div className={styles.editProfileBtnWrapper}>
        <div className={styles.editProfileBtn} onClick={onEditProfileBtnClick}>
          <div className={styles.editProfile}>Edit Profile</div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <OrderSummary />
    </div>
  );
};

export default HOMESELLER;

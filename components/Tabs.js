import { useState } from "react";
import styles from "../styles/Tabs.module.css";

const tabs = ["Between Dates", "In Time"];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [isActive, setIsActive] = useState(true);

  const clickHandler = (event) => {
    if (event.target.innerHTML !== activeTab) {
      setIsActive(!isActive);
      setActiveTab(event.target.innerHTML);
    }
  };

  return (
    <div className={styles.tabs}>
      <ul>
        <li className={isActive ? styles.current_tab : ""}>
          <button type="button" onClick={clickHandler}>
            Between Dates
          </button>
        </li>
        <li className={!isActive ? styles.current_tab : ""}>
          <button type="button" onClick={clickHandler}>
            In Time
          </button>
        </li>
      </ul>
      {isActive && <p>Between Dates Content</p>}
      {!isActive && <p>In Time Content</p>}
    </div>
  );
};

export default Tabs;

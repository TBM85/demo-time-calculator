import { useState } from "react";
import styles from "../styles/Tabs.module.css";
import BetweenDates from "./BetweenDates";

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
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={activeTab === tab ? styles.current_tab : ""}
          >
            <button type="button" onClick={clickHandler}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
      {isActive && <BetweenDates />}
      {!isActive && <p>In Time Content</p>}
    </div>
  );
};

export default Tabs;

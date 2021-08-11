import styles from "../styles/Tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <ul>
        <li className={styles.current_tab}>Between Dates</li>
        <li>In Time</li>
      </ul>
      <div>
        <p>Between Dates</p>
      </div>
      <div>
        <p>In Time</p>
      </div>
    </div>
  );
};

export default Tabs;
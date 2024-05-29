import styles from "./Spinner.module.css";
function Spinner() {
  return (
    <div className="flex items-center justify-center inset-0 backdrop-blur-sm bg-slate-300/20 absolute">
      <div className={`${styles.container}`}>
        <div className={styles.loader}></div>
        <div className={styles.loader}></div>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}

export default Spinner;

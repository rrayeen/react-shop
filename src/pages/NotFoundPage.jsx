import GoBackButton from "../ui/GoBackButton";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-transparent">
        <GoBackButton></GoBackButton>
        <GoBackButton type="home"></GoBackButton>
      </div>
      <div className="flex items-center justify-center h-dvh w-dvw">
        <div className={styles.mainWrapper}>
          <div className={styles.main}>
            <div className={styles.antenna}>
              <div className={styles.antenna_shadow}></div>
              <div className={styles.a1}></div>
              <div className={styles.a1d}></div>
              <div className={styles.a2}></div>
              <div className={styles.a2d}></div>
              <div className={styles.aBase}></div>
            </div>
            <div className={styles.tv}>
              <div className={styles.cruve}>
                <svg
                  xml:space={styles.preserve}
                  viewBox="0 0 189.929 189.929"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  className={styles.curveSvg}
                >
                  <path
                    d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                  C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
                  ></path>
                </svg>
              </div>
              <div className={styles.displayDiv}>
                <div className={styles.screenOut}>
                  <div className={styles.screenOut1}>
                    <div className={styles.screen}>
                      <span className={styles.notfoundText}> NOT FOUND</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.lines}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
              </div>
              <div className={styles.buttonsDiv}>
                <div className={styles.b1}>
                  <div></div>
                </div>
                <div className={styles.b2}></div>
                <div className={styles.speakers}>
                  <div className={styles.g1}>
                    <div className={styles.g11}></div>
                    <div className={styles.g12}></div>
                    <div className={styles.g13}></div>
                  </div>
                  <div className={styles.g}></div>
                  <div className={styles.g}></div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.base1}></div>
              <div className={styles.base2}></div>
              <div className={styles.base3}></div>
            </div>
          </div>
          <div className={styles.text404}>
            <div className={styles.text4041}>4</div>
            <div className={styles.text4042}>0</div>
            <div className={styles.text4043}>4</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

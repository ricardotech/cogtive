import { FunctionComponent } from "react";
import styles from "../styles/Equipment.module.css";

const EquipmentModule: FunctionComponent = () => {
  const products = [
    { title: "Product 1" },
    { title: "Product 2" },
    { title: "Product 3" },
    { title: "Product 4" },
  ];

  return (
    <div className={styles.module__container}>
      <div className={styles.module__content}>
        <div className={styles.module__content_header}>
          <div className={styles.module__content_title}>
            <h4>Equipment</h4>
            <p>700 - Production</p>
          </div>
          <div className={styles.module__content_header_metrics}>
            <p>
              OEE <span>60%</span> | 80%
            </p>
            <p>TMF 8.2h</p>
          </div>
        </div>
        <div className={styles.module__progress_bar}>
          <div className={styles.progress__item_one}></div>
          <div className={styles.progress__item_two}></div>
          <div className={styles.progress__item_three}></div>
          <div className={styles.progress__item_four}></div>
          <div className={styles.progress__item_five}></div>
          <div className={styles.progress__item_six}></div>
        </div>
        <div className={styles.module__products}>
          {products.map((product, index) => {
            return (
              <div
                className={styles.module__products_container}
                key={index + 1}
              >
                <div className={styles.module__products_content}>
                  <div className={styles.module__products_title}>
                    <h6>{[product.title]}</h6>
                    <p>123000 | 12345678</p>
                  </div>
                  <div className={styles.module__products_metrics}>
                    <p>111.5h</p>
                    <span>22.8h</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EquipmentModule;

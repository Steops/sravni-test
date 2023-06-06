import styles from "./index.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Нет данных</h1>
    </div>
  );
};

export { NotFoundPage };

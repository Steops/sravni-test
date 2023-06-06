import styles from "../../components/NotFound/index.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.notFound__title}>Нет данных</h1>
    </div>
  );
};

export { NotFound };

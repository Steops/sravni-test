import styles from "./index.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.title}>Ошибка!</h1>
    </div>
  );
};

export { ErrorPage };

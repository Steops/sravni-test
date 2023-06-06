import styles from "../../components/ErrorPage/index.module.scss";

const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      <h1 className={styles.errorPage__title}>Ошибка!</h1>
    </div>
  );
};

export default ErrorPage;

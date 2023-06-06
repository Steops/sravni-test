import { useTypedSelector } from "../../hooks/useTypedSelector";
import { RootState } from "../../store/store";
import type {} from "redux-thunk/extend-redux";
import styles from "../../components/UsersList/index.module.scss";
import { Loader } from "../../uikit/Loader/Loader";
import { IUsers } from "../../types/users";
import { Email } from "../../uikit/Email";
import { Username } from "../../uikit/Username";
import { Phone } from "../../uikit/Phone";
import { Company } from "../../uikit/Company";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useNavigate } from "react-router";
import { PATHS } from "../../routes/paths";

interface IUserCard {
  user: IUsers;
}
const UserCard = ({ user }: IUserCard) => {
  const navigate = useNavigate();
  return (
    <div
      className={styles.userCard}
      onClick={() => navigate(PATHS.userID(user.id))}
    >
      <div className={styles.userCardContent}>
        <h1 className={styles.userCardName}>{user.name}</h1>
        <a href={`mailto:${user.email}`} className={styles.userCardInfo}>
          <Email />
          {user.email}
        </a>
        <div className={styles.userCardInfo}>
          <Username />
          {user.username}
        </div>
        <div className={styles.userCardInfo}>
          <Phone />
          {user.phone}
        </div>
        <div className={styles.userCardCompany}>
          <Company />
          <div className={styles.userCardCompanyInfo}>
            <h2 className={styles.userCardCompanyName}>{user.company.name}</h2>
            <span className={styles.userCardCompanyCatchPhrase}>
              {user.company.catchPhrase}
            </span>
            <span className={styles.userCardCompanyBs}>{user.company.bs}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// user вместо userCard
const UsersList = () => {
  const { users, error, loading } = useTypedSelector(
    (state: RootState) => state.users
  );

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <div className={styles.userList}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {users.map((item, index) => (
            <UserCard user={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { UsersList };

import styles from "./index.module.scss";
import { RootState, useTypedSelector } from "../../store/store";
import type {} from "redux-thunk/extend-redux";
import { IUsers } from "../../types/users";
import { ErrorPage } from "../../pages/ErrorPage";
import { useNavigate } from "react-router";
import { PATHS } from "../../routes/paths";
import { Email } from "../icons/Email";
import { Username } from "../icons/Username";
import { Phone } from "../icons/Phone";
import { Company } from "../icons/Company";
import { Loader } from "../Loader";

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
          {users.map((user) => (
            <UserCard user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { UsersList };

import styles from "../../components/PhotosList/index.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { PATHS } from "../../routes/paths";
import { fetchPhotos } from "../../store/action-creators/fetchPhotos";
import { IPhotos } from "../../types/photos";
import { Loader } from "../../uikit/Loader/Loader";
import { NotFound } from "../NotFound/NotFound";
import ErrorPage from "../ErrorPage/ErrorPage";

interface IPhotoCard {
  photo: IPhotos;
}
const PhotoCard = ({ photo }: IPhotoCard) => {
  return (
    <div className={styles.photoCard}>
      <div className={styles.photoCardContent}>
        <img
          src={photo.url}
          alt={photo.title}
          className={styles.photoCardImg}
        />
        <span className={styles.photoCardId}>ID фото: {photo.id}</span>
      </div>
    </div>
  );
};
const PhotosList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useTypedSelector((state) => state.users);
  const { userID } = useParams();
  const ID = Number(userID);

  useEffect(() => {
    dispatch(fetchPhotos(ID));
  }, [ID, dispatch]);

  const { photos, loading, error } = useTypedSelector((state) => state.photos);
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }
  if (photos.length === 0 || ID > 10) {
    return <NotFound />;
  }
  return (
    <div className={styles.photosList}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {photos.map((photo, index) => (
            <PhotoCard photo={photo} key={index} />
          ))}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={() => navigate(PATHS.userID(ID - 1))}
            disabled={ID !== 1 ? false : true}
          >
            Назад
          </button>
          <button
            className={styles.btn}
            onClick={() => navigate(PATHS.userID(ID + 1))}
            disabled={ID <= users.length - 1 ? false : true}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};

export { PhotosList };

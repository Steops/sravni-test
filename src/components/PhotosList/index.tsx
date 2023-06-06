import styles from "../../components/PhotosList/index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchPhotos } from "../../store/action-creators/fetchPhotos";
import { IPhotos } from "../../types/photos";
import { Loader } from "../Loader";
import { ErrorPage } from "../../pages/ErrorPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { useTypedSelector } from "../../store/store";

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
  const { userID } = useParams();
  const ID = Number(userID);

  useEffect(() => {
    dispatch(fetchPhotos(ID));
  }, [ID, dispatch]);

  const { photos, loading, error } = useTypedSelector((state) => state.photos);
  const [startIndex, setStartIndex] = useState(0);
  const [finishIndex, setFinishIndex] = useState(10);
  const setBackPhotos = () => {
    setStartIndex(startIndex - 10);
    setFinishIndex(finishIndex - 10);
  };
  const setForwardPhotos = () => {
    setStartIndex(startIndex + 10);
    setFinishIndex(finishIndex + 10);
  };

  const selectedPhotos = photos.slice(startIndex, finishIndex);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <ErrorPage />;
  }

  //Искусственно ограничил ID юзера, потому что в сумме 10 юзеров есть
  if (photos.length === 0 || ID > 10) {
    return <NotFoundPage />;
  }

  return (
    <div className={styles.photosList}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          {selectedPhotos.map((photo, index) => (
            <PhotoCard photo={photo} key={index} />
          ))}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={() => setBackPhotos()}
            disabled={startIndex === 0 ? true : false}
          >
            Назад
          </button>
          <button
            className={styles.btn}
            onClick={() => setForwardPhotos()}
            disabled={finishIndex === 50 ? true : false}
          >
            Вперед
          </button>
        </div>
      </div>
    </div>
  );
};

export { PhotosList };

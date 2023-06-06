import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "../src/assets/scss/index.scss";
import { Router } from "./routes";
import { fetchUsers } from "./store/action-creators/fetchUsers";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="layout">
      <Router />
    </div>
  );
};

export default App;

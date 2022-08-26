import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState, useEffect } from "react";
import HomeTable from "./HomeTable";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { getDataFromLocalStorage } from "../../utils/ReuseFunctions";
const Home = () => {
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setState(getDataFromLocalStorage());
  }, []);

  return (
    <div className={styles.container}>
      <h1>Teravin Test React JS </h1>
      <div className={styles.button}>
        <Button onClick={() => navigate("/input")} icon={<PlusOutlined />}>
          Add Data
        </Button>
      </div>
      <div className={styles.containerTable}>
        <HomeTable data={state} />
      </div>
    </div>
  );
};

export default Home;

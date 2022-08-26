import styles from "./DetailData.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/ReuseFunctions";

const DetailData = () => {
  const [state, setState]: any = useState();
  const { id } = useParams();
  useEffect(() => {
    const data = getDataFromLocalStorage();
    let getDataById = data.filter((data: any) => data.id == id);
    setState(getDataById[0]);
  }, [id]);

  return (
    <div className={styles.main}>
      {state && (
        <div className={styles.container}>
          <h1 style={{ fontWeight: "bold" }}>Detail Data</h1>
          <div>
            <h2>Nama : {state.name}</h2>
            <h2>Jenis Kelamin : {state.gender}</h2>
            <h2>Email : {state.email}</h2>
            <h2>No Telp : {state.phone}</h2>
            <h2>Tempat tanggal lahir : {state.ttl}</h2>
            <h2>Alamat : {state.address}</h2>
          </div>
          <h1 style={{ marginTop: "62px" }}>Pendidikan</h1>
          {state.education.map((data: any, i: number) => (
            <div key={i} style={{ marginTop: "32px" }}>
              <h2>Nama Institusi : {data[`edu_name_${i}`]}</h2>
              <h2>Tingkat Pendidikan : {data[`edu_level_${i}`]}</h2>
              <h2>Jurusan : {data[`major_${i}`]}</h2>
              <h2>Tahun: {data[`year_${i}`]}</h2>
              <h2>Prestasi : {data[`note_${i}`]}</h2>
            </div>
          ))}
          <h1 style={{ marginTop: "62px" }}>Pekerjaan</h1>
          {state.work_exp.map((data: any, i: number) => (
            <div key={i} style={{ marginTop: "32px" }}>
              <h2>Nama Perusahaan : {data[`company_${i}`]}</h2>
              <h2>Tahun : {data[`year_${i}`]}</h2>
              <h2>Jabatan : {data[`role_${i}`]}</h2>
              <h2>Lokasi: {data[`location_${i}`]}</h2>
              <h2>Pencapaian : {data[`note_exp_${i}`]}</h2>
            </div>
          ))}

          <h1 style={{ marginTop: "62px" }}>Skill</h1>
          {state.skills.map((data: any, i: number) => (
            <div
              key={i}
              style={{
                background: "dodgerblue",
                padding: "4px",
                color: "white",
                borderRadius: "4px",
                margin: "2px",
                display: "inline",
              }}
            >
              {data}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DetailData;

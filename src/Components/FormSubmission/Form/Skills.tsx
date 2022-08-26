import { Button, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import styles from "../FormSubmission.module.css";

interface IProps {
  state: any;
}
const Skills = ({ state }: IProps) => {
  const [skill, setSkill] = useState("");

  const addSkill = (): void => {
    const isEmptySpace = /^\s*$/.test(skill);
    if (isEmptySpace) {
      return;
    }
    state.skills.push(skill);
    setSkill("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginTop: "32px" }}>
        {state.skills.map((data: any, i: number) => (
          <div
            key={i}
            style={{
              background: "dodgerblue",
              padding: "4px",
              color: "white",
              borderRadius: "4px",
              margin: "2px",
            }}
          >
            {data}
          </div>
        ))}
      </div>
      <Input
        name="skill"
        value={skill}
        onChange={(e: any) => setSkill(e.target.value)}
        placeholder="Masukan Skill Atau Keahlian Disini"
        style={{ width: "100%", margin: "40px 0px" }}
      />
      <Button
        style={{ width: "100%", marginBottom: "12rem" }}
        type="primary"
        onClick={addSkill}
        icon={<PlusOutlined />}
      >
        Tambah
      </Button>
    </div>
  );
};

export default Skills;

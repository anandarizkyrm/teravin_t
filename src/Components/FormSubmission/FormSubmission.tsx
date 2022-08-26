import { useState } from "react";
import Step from "./Step";
import styles from "./FormSubmission.module.css";
import { Button, message } from "antd";
import Biodata from "./Form/Biodata";
import Education from "./Form/Education";
import WorkExp from "./Form/WorkExp";
import Skills from "./Form/Skills";
import { saveToStorage } from "../../utils/ReuseFunctions";
import { useNavigate } from "react-router-dom";

const FormSubmission = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    id: Math.floor(Math.random() * 1000),
    education: [
      {
        edu_name_0: "",
        edu_level_0: "",
        major_0: "",
        year_0: "",
        note_0: "",
      },
    ],
    work_exp: [
      {
        company_0: "",
        year_0: "",
        location_0: "",
        note_exp_0: "",
        role_0: "",
      },
    ],
    skills: [],
  });
  const [step, setStep]: any = useState(0);
  const content = [
    <Biodata state={state} setState={setState} step={step} setStep={setStep} />,
    <Education
      state={state}
      setState={setState}
      step={step}
      setStep={setStep}
    />,
    <WorkExp state={state} setState={setState} step={step} setStep={setStep} />,
    <Skills state={state} />,
  ];

  const handleSubmitAll = () => {
    saveToStorage(state);
    message.success("Processing complete!");
    navigate("/");
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Form Submission</h1>
        <Step steps={step} />
        <div className="steps-content">{content[step]}</div>
        <div className="steps-action">
          {step === content.length - 1 && (
            <Button type="primary" onClick={handleSubmitAll}>
              Done
            </Button>
          )}
          {step > 0 && (
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => setStep(step - 1)}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSubmission;

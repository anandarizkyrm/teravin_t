import { Button, Col, Form, Input } from "antd";
import { handleArrObjectChange } from "../../../utils/ReuseFunctions";
import styles from "../FormSubmission.module.css";
import { PlusOutlined } from "@ant-design/icons";

interface IProps {
  state: any;
  setState: any;
  step: number;
  setStep: any;
}
const Education = ({ state, setState, step, setStep }: IProps) => {
  const [form] = Form.useForm();

  const handleNext = async () => {
    let check = await form.validateFields();
    if (check) {
      setStep(step + 1);
    }
  };

  const addEduLevel = (index: number) => {
    setState({
      ...state,
      education: [
        ...state.education,
        {
          [`edu_name_${index}`]: "",
          [`edu_level_${index}`]: "",
          [`major_${index}`]: "",
          [`year_${index}`]: "",
          [`note_${index}`]: "",
        },
      ],
    });
  };

  return (
    <div>
      <div className={styles.eduContainer}>
        {state.education.map((data: any, i: number) => (
          <Form
            key={i}
            layout="vertical"
            initialValues={{
              ["edu_name_" + i]: data[`edu_name_${i}`],
              ["edu_level_" + i]: data[`edu_level_${i}`],
              ["major_" + i]: data[`major_${i}`],
              ["year_" + i]: data[`year_${i}`],
              ["note_" + i]: data[`note_${i}`],
            }}
            form={form}
            style={{ marginTop: "62px", width: "100%", padding: "12px" }}
          >
            <Col span={32}>
              <Form.Item
                name={`edu_name_${i}`}
                label={`Nama Pendidikan ${i + 1}`}
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Nama"
                  name={`edu_name_${i}`}
                  style={{ width: "100%" }}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "education")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`edu_level_${i}`}
                label="Tingkat"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Tingkat Pendidikan contoh : (SD, SMP, SMA , S1 , dst)"
                  name={`edu_level_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "education")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`major_${i}`}
                label="Jurusan"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Jurusan Pendidikan"
                  name={`major_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "education")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`year_${i}`}
                label="Tahun"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Tahun Pendidikan"
                  name={`year_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "education")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`note_${i}`}
                label="Pencapaian"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Masukan Pencapaian Prestasi Dll"
                  name={`note_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "education")
                  }
                />
              </Form.Item>
            </Col>
          </Form>
        ))}
        {state.education.length <= 1 && (
          <div
            onClick={() => addEduLevel(state.education.length)}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <PlusOutlined style={{ fontSize: "4rem", marginBottom: "12px" }} />
            <h3>Tambah Riwayat Pendidikan</h3>
          </div>
        )}
      </div>
      <Button
        type="primary"
        style={{
          width: "90px",
          right: 30,
          position: "absolute",
        }}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
};

export default Education;

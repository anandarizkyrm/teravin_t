import { Button, Col, Form, Input } from "antd";
import { handleArrObjectChange } from "../../../utils/ReuseFunctions";
import { PlusOutlined } from "@ant-design/icons";
import styles from "../FormSubmission.module.css";

interface IProps {
  state: any;
  setState: any;
  step: number;
  setStep: any;
}
const WorkExp = ({ state, setState, step, setStep }: IProps) => {
  const [form] = Form.useForm();

  const handleNext = async () => {
    let check = await form.validateFields();
    if (check) {
      setStep(step + 1);
    }
  };
  const addWorkExp = (index: number) => {
    setState({
      ...state,
      work_exp: [
        ...state.work_exp,
        {
          [`company_${index}`]: "",
          [`year_${index}`]: "",
          [`location_${index}`]: "",
          [`year_${index}`]: "",
          [`note_exp_${index}`]: "",
        },
      ],
    });
  };

  return (
    <div>
      <div className={styles.eduContainer}>
        {state.work_exp.map((data: any, i: number) => (
          <Form
            key={i}
            layout="vertical"
            initialValues={{
              ["company_" + i]: data[`company_${i}`],
              ["year_" + i]: data[`year_${i}`],
              ["location_" + i]: data[`location_${i}`],
              ["role_" + i]: data[`role_${i}`],
              ["note_exp_" + i]: data[`note_exp_${i}`],
            }}
            form={form}
            style={{ marginTop: "62px", width: "100%", padding: "12px" }}
          >
            <Col span={32}>
              <Form.Item
                name={`company_${i}`}
                label={`Nama Perusahaan Ke - ${i + 1}`}
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Nama Perusahaan"
                  name={`company_${i}`}
                  style={{ width: "100%" }}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "work_exp")
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
                  placeholder="Tahun dari - sampai"
                  name={`year_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "work_exp")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`location_${i}`}
                label="Lokasi Kantor"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Lokasi Perusahaan"
                  name={`location_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "work_exp")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`role_${i}`}
                label="Jabatan"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input
                  placeholder="Masukan Jabatan Anda Pada Perusahaan"
                  name={`role_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "work_exp")
                  }
                />
              </Form.Item>
              <Form.Item
                name={`note_exp_${i}`}
                label="Pencapaian"
                rules={[
                  { required: true, message: "Field Tidak Boleh Kosong" },
                ]}
              >
                <Input.TextArea
                  rows={4}
                  placeholder="Masukan Pencapaian Prestasi Dll"
                  name={`note_exp_${i}`}
                  autoComplete="off"
                  onChange={(e: any) =>
                    handleArrObjectChange(e, state, setState, i, "work_exp")
                  }
                />
              </Form.Item>
            </Col>
          </Form>
        ))}
        {state.work_exp.length <= 1 && (
          <div
            onClick={() => addWorkExp(state.work_exp.length)}
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <PlusOutlined style={{ fontSize: "4rem", marginBottom: "12px" }} />
            <h3>Tambah Riwayat Pekerjaan</h3>
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

export default WorkExp;

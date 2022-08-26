import {
  Button,
  Cascader,
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import { useState } from "react";
import { handleChange } from "../../../utils/ReuseFunctions";
import type { RadioChangeEvent } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

interface IProps {
  state: any;
  setState: any;
  step: number;
  setStep: any;
}
const Biodata = ({ state, setState, step, setStep }: IProps) => {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };
  const handleNext = async () => {
    let check = await form.validateFields();
    if (check) {
      setStep(step + 1);
    }
  };

  const onChange = (e: RadioChangeEvent) => {
    setState({ ...state, gender: e.target.value });
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      layout="horizontal"
      initialValues={{
        name: state.name,
        email: state.email,
        gender: state.gender,
        ttl: state.ttl,
        address: state.address,
        phone: state.phone,
      }}
      form={form}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      style={{ marginTop: "62px" }}
    >
      <Form.Item
        name="name"
        label="Nama"
        rules={[{ required: true, message: "Field Tidak Boleh Kosong" }]}
      >
        <Input
          placeholder="Masukan Nama"
          name="name"
          style={{ width: "100%" }}
          autoComplete="off"
          onChange={(e: any) => handleChange(e, state, setState)}
        />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: "Field Tidak Boleh Kosong" }]}
      >
        <Input
          placeholder="Masukan Email"
          name="email"
          autoComplete="off"
          onChange={(e: any) => handleChange(e, state, setState)}
        />
      </Form.Item>

      <Form.Item
        label="Jenis Kelamin"
        name="gender"
        rules={[{ required: true, message: "Pilih Jenis Kelamin" }]}
      >
        <Radio.Group onChange={onChange}>
          <Radio value={"Laki - Laki"}>Laki - Laki</Radio>
          <Radio value={"Perempuan"}>Perempuan</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        name="ttl"
        label="Tempat Tanggal Lahir"
        rules={[{ required: true, message: "Field Tidak Boleh Kosong" }]}
      >
        <Input
          placeholder="Masukan Tempat dan Tanggal Lahir"
          name="ttl"
          autoComplete="off"
          onChange={(e: any) => handleChange(e, state, setState)}
        />
      </Form.Item>
      <Form.Item
        name="address"
        label="Alamat"
        rules={[{ required: true, message: "Field Tidak Boleh Kosong" }]}
      >
        <Input
          placeholder="Masukan Alamat"
          name="address"
          autoComplete="off"
          onChange={(e: any) => handleChange(e, state, setState)}
        />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Nomor Telp"
        rules={[{ required: true, message: "Field Tidak Boleh Kosong" }]}
      >
        <Input
          placeholder="Masukan No telp"
          name="phone"
          autoComplete="off"
          onChange={(e: any) => handleChange(e, state, setState)}
        />
      </Form.Item>
      <Button type="primary" onClick={handleNext}>
        Next
      </Button>
    </Form>
  );
};

export default Biodata;

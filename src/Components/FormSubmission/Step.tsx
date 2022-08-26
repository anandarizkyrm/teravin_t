import { Steps } from "antd";

interface IProps {
  steps: number;
}
const Step = ({ steps }: IProps) => {
  return (
    <Steps size="small" current={steps}>
      <Steps.Step title="Data Personal" />
      <Steps.Step title="Riwayat Pendidikan" />
      <Steps.Step title="Pengalaman Kerja" />
      <Steps.Step title="Keahlian" />
    </Steps>
  );
};

export default Step;

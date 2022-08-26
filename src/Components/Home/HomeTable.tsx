import { EyeOutlined } from "@ant-design/icons";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useNavigate } from "react-router-dom";

const HomeTable = ({ data }: any) => {
  const navigate = useNavigate();
  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Jenis Kelamin",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Tempat Tanggal Lahir",
      dataIndex: "ttl",
      key: "ttl",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },

    {
      title: "Alamat",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Aksi",
      key: "id",
      render: (_, { id }) => (
        <div style={{ textAlign: "center", color: "green" }}>
          <EyeOutlined
            onClick={() => navigate(`/detail/${id}`)}
            style={{ fontSize: "18px" }}
          />
        </div>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default HomeTable;

import { Table } from "antd";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Table
        dataSource={[
          {
            key: "1",
            name: "Mike",
            age: 32,
            address: "10 Downing Street",
          },
          {
            key: "2",
            name: "John",
            age: 42,
            address: "10 Downing Street",
          },
        ]}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            key: "name",
          },
          {
            title: "Age",
            dataIndex: "age",
            key: "age",
          },
          {
            title: "Address",
            dataIndex: "address",
            key: "address",
          },
        ]}
      />
    </>
  );
}

export default App;

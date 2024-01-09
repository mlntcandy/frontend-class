import { Table, Tag } from "antd";
import { type ColumnsType } from "antd/es/table";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  occupation: string;
}

const tableColumns: ColumnsType<DataType> = [
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
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Occupation",
    dataIndex: "occupation",
    key: "occupation",
  },
];

const tableData: DataType[] = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
    tags: ["nice", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
    tags: ["great", "artist"],
    occupation: "Artist",
  },
  {
    key: "3",
    name: "Jane",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "4",
    name: "Joe",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "5",
    name: "Peter",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "6",
    name: "Paul",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "7",
    name: "Mary",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "8",
    name: "Lucy",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
  {
    key: "9",
    name: "Lily",
    age: 32,
    address: "10 Downing Street",
    tags: ["great", "developer"],
    occupation: "Software Engineer",
  },
];

function App() {
  return (
    <>
      <Table dataSource={tableData} columns={tableColumns} />
    </>
  );
}

export default App;

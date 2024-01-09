import { University, useUniversities } from "../lib/api/universities";
import { Table } from "antd";
import { type ColumnsType } from "antd/es/table";
import { Pagination } from "./Pagination";

export type UniversitiesTableProps = {
  displayPerPage: number;
  defaultPage?: number;
};

const universityTableColumns: ColumnsType<University> = [
  {
    title: "Страна",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Название школы",
    dataIndex: "name",
    key: "name",
  },
];

export const UniversitiesTable: React.FC<UniversitiesTableProps> = (props) => {
  const { data, page, setPage } = useUniversities(
    props.displayPerPage,
    props.defaultPage
  );

  return (
    <>
      {data === null && <div>Loading...</div>}
      {data !== null && (
        <Table
          dataSource={data}
          columns={universityTableColumns}
          pagination={false}
        />
      )}
      <Pagination page={page} onChange={setPage} />
    </>
  );
};

import { University, useUniversities } from "../lib/api/universities";
import { Table } from "antd";
import { type ColumnsType } from "antd/es/table";
import { Pagination } from "./Pagination";
import styled from "styled-components";

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

const StyledTable = styled(Table)`
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  overflow: hidden;
` as typeof Table;
//   ^ Table has type generics which are lost with `styled()`,
//     and we're not using any additional props, so casting is fine

const StyledLoading = styled.div`
  margin: 1rem;
  text-align: center;
  font-size: 1.5rem;
  color: #888;
`;

export const UniversitiesTable: React.FC<UniversitiesTableProps> = (props) => {
  const { data, page, setPage } = useUniversities(
    props.displayPerPage,
    props.defaultPage
  );

  return (
    <>
      {data === null && <StyledLoading>Loading...</StyledLoading>}
      {data !== null && (
        <StyledTable
          dataSource={data}
          columns={universityTableColumns}
          pagination={false}
        />
      )}
      <Pagination page={page} onChange={setPage} />
    </>
  );
};

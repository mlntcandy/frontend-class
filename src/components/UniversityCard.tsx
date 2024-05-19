import styled from "styled-components";
import { University } from "../lib/api/universities";

const CardStyled = styled.div`
  background-color: var(--gray-100);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const UniversityCard: React.FC<{ data: University }> = ({ data }) => {
  return (
    <CardStyled>
      <div>{data.name}</div>
      <div>{data.country}</div>
      <div>
        {data.web_pages.map((page) => (
          <a key={page} href={page}>
            {page}
          </a>
        ))}
      </div>
    </CardStyled>
  );
};

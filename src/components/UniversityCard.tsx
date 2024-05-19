import styled from "styled-components";

interface IUniversity {
  name: string;
  country: string;
  web_pages: string[];
}

const CardStyled = styled.div`
  background-color: var(--gray-100);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

export const UniversityCard: React.FC<{ data: IUniversity }> = ({ data }) => {
  return (
    <CardStyled>
      <title>{data.name}</title>
      <span>{data.country}</span>
      <span>
        {data.web_pages.map((page) => (
          <a key={page} href={page}>
            {page}
          </a>
        ))}
      </span>
    </CardStyled>
  );
};

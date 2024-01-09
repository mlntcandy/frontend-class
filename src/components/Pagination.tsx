import styled from "styled-components";

export type PaginationProps = {
  page: number;
  onChange: (page: number) => void;
};

interface StyledButtonProps {
  left?: boolean;
  right?: boolean;
  radius?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: ${({ left, right, radius }) => {
    radius ??= "0.5rem";
    if (left) return `${radius} 0 0 ${radius}`;
    if (right) return `0 ${radius} ${radius} 0`;
    return radius;
  }};
  padding: 0.5rem 0.8rem;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    border-color: #aaa;
    cursor: not-allowed;
  }
`;

const CurrentPage = styled.span`
  padding: 0.5rem 0.8rem;
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
`;

const PaginationWrapper = styled.div`
  display: flex;
`;

export const Pagination: React.FC<PaginationProps> = (props) => {
  const back = () => {
    if (props.page === 0) return;
    props.onChange(props.page - 1);
  };
  const next = () => props.onChange(props.page + 1);

  return (
    <PaginationWrapper>
      <StyledButton onClick={back} disabled={props.page === 0} left>
        &lt;
      </StyledButton>
      <CurrentPage>{props.page + 1}</CurrentPage>
      <StyledButton onClick={next} right>
        &gt;
      </StyledButton>
    </PaginationWrapper>
  );
};

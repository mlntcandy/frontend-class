import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: var(--link);
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

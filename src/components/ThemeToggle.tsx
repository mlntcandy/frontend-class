import { useTheme } from "../lib/theme";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: 0.25em;
  padding: 0.5em 1em;
  cursor: pointer;
`;

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <StyledButton onClick={toggle}>Тема</StyledButton>;
};

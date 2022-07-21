import styled from 'styled-components';

export const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s;
  width: 100%;
  max-width: 190px;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

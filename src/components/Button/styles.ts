import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  margin: 8px;

  color: ${(props) => props.theme.white};

  background-color: ${(props) => props.theme['green-500']};

  border: none;
  cursor: pointer;
`

import styled from "styled-components";
import { css } from "styled-components";
import { IInputProps } from "../../types";

const StyledContainer = styled.div`
  text-align: left;
  div {
    font-size: 17px;
    font-weight: bold;
    font-family: var(--font-label);
    span {
      color: var(--red);
      font-family: var(--font-label);
    }
  }
`;

const StyledContainerInput = styled.div<{isErrored: boolean}>`
  background: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  padding: 0.9rem;
  width: 100%;
  display: flex;
  transition: 0.5s;
  font-family: var(--font-label);

  @media (max-width: 1300px) {
    padding: 0.5rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);
    `}

  &:hover {
    border-color: var(--gray);
  }

  input {
    font-family: var(--font-label);
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--background);
    font-size: 18px;

    &::placeholder {
      font-family: var(--font-label);
      color: var(--placeholder);
      font-size: 15px;
      font-weight: bold;
    }
  }
`;

export const Input = ({ label, register, name, error, ...rest }: IInputProps) => {
  return (
    <StyledContainer>
      <div style={{ marginBottom: "0.8rem" }}>
        {label} {!!error && <span> - {error}</span>}{" "}
      </div>
      <StyledContainerInput isErrored={!!error}>
        <input {...register(name)} {...rest} />
      </StyledContainerInput>
    </StyledContainer>
  );
};

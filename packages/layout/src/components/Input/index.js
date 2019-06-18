import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  font-size: 14px;
  word-wrap: break-word;
  line-height: 1em;
  outline: 0;
  white-space: normal;
  min-height: 2em;
  background: #fff;
  display: inline-block;
  padding: 1em;
  color: rgba(0, 0, 0, 0.87);
  box-shadow: none;
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 0.3rem;
  transition: box-shadow 0.1s ease, width 0.1s ease;

  &:hover,
  &:focus {
    border-color: #96c8da;
    box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
  }
`;

export { Input };

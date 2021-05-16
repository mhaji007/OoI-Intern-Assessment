import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19); */
`;

export const MutedLink = styled.a`
  z-index: 11;
  font-size: 11px;
  color: rgb(142 139 139 / 80%);
  font-weight: 500;
  text-decoration: none;
  margin-bottom:.7rem;
`;

export const BoldLink = styled.a`
  z-index: 11;
  font-size: 11px;
  color: #2a2a72;
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  z-index: 11;
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  margin-bottom: 3px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px rgba(15, 15, 15, 0.19);
  transition: all 300ms ease-in-out;
  transform-origin: left;
  font-size: 12px;
  &::placeholder {
    color: rgb(142 139 139 / 80%);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #2a2a72;
  }
`;

export const SubmitButton = styled.button`
  z-index: 11;
  width: 100%;
  white-space: nowrap;
  max-width: 200px;
  min-width: 100px;
  padding: 11px 25%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background-color: #2a2a72;
  background-image: linear-gradient(315deg, #2a2a72 0%, #08679f);

  &:hover {
    filter: brightness(1.03);
  }
`;

export const MessageContainer = styled.div`
  background-color: ${({ type }) =>
    type && type === "error" ? ` #dc3545` : `#28a745`};

  width: 100%;
  min-height: 42px;
  border-radius: .4rem;
  margin-bottom:1.2rem;
  padding:.33rem;
  color:#fff;
  line-height:1.4;
  display:flex;
  justify-content:center;
  align-items:center;

  /* h6{
    color: #fff;
    padding: 0.1rem;
    font-size:6px;
  } */
`;

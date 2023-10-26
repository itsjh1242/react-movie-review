import styled from "styled-components";

export const Window = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

// Boarding Page
export const BoardingLoginFrame = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1000px;
  width: 1000px;
  min-height: 600px;
  height: 600px;
  background: #ffffff;
`;

export const BoardingLoginLeftFrame = styled.div`
  min-width: 500px;
  width: 500px;
  min-height: 600px;
  height: 600px;
  background: #ffffff;
`;

export const BoardingLoginLeftComponents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-top: 100px;
  padding-left: 50px;

  & > .login_title {
    font-size: 36px;
  }
  & > .login_text_1 {
    margin-top: 10px;
    font-size: 14px;
  }
  & > .login_text_2 {
    margin-top: 10px;
    font-size: 14px;
  }
`;

export const BoardingLoginLeftComponentsButton = styled.button`
  margin-top: 45px;
  padding: 10px;
  text-align: center;
  width: 350px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: #14213d;
  color: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

export const BoardingLoginBar = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 350px;
  gap: 10px;

  & > .login_text_3 {
    font-size: 12px;
  }
`;

export const BoardingLoginBarLine = styled.div`
  width: 140px;
  height: 1px;
  background: #000000;
`;

export const BoardingLoginRightFrame = styled.div`
  min-width: 500px;
  width: 500px;
  min-height: 600px;
  height: 600px;
  background: #14213d;
`;

export const BoardingLoginInputFrame = styled.input`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  font-size: 14px;

  &:focus {
    outline: none;
    transform: scale(1.05);
    transition: 0.5s;
  }
`;

import "./App.css";
import { createGlobalStyle } from "styled-components";
import * as S from "./styles/styles";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #000000;
  }
  p {
    margin: 0;
    padding: 0;
  }
  `;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <S.Window>
        <S.BoardingLoginFrame>
          <S.BoardingLoginLeftFrame>
            <S.BoardingLoginLeftComponents>
              <p className="login_title">로그인.</p>
              <p className="login_text_1">
                계정이 없으신가요? 계정을 만드시려면 <strong>이곳</strong>을 클릭해주세요.
              </p>
              <S.BoardingLoginInputFrame placeholder="Username" />
              <S.BoardingLoginInputFrame placeholder="Password" />
              <p className="login_text_2">비밀번호를 잃어버리셨나요?</p>
              <S.BoardingLoginLeftComponentsButton>LOGIN</S.BoardingLoginLeftComponentsButton>
              <S.BoardingLoginBar>
                <S.BoardingLoginBarLine />
                <p className="login_text_3">또는</p>
                <S.BoardingLoginBarLine />
              </S.BoardingLoginBar>
            </S.BoardingLoginLeftComponents>
          </S.BoardingLoginLeftFrame>
          <S.BoardingLoginRightFrame></S.BoardingLoginRightFrame>
        </S.BoardingLoginFrame>
      </S.Window>
    </div>
  );
}

export default App;

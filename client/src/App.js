import "./App.css";
import { createGlobalStyle } from "styled-components";
import * as S from "./styles/styles";
import RoutePath from "./router/Router";

import { useNavigate, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body { 
    background: #000000;
    font-family: 'Montserrat-Regular';
  }
  p {
    margin: 0;
    padding: 0;
  }
  `;

function App() {
  const navigate = useNavigate();
  const MainPage = () => {
    navigate("/main");
  };
  return (
    <div className="App">
      <RoutePath />
      <GlobalStyle />
      <S.Window>
        <S.BoardingLoginFrame>
          <S.BoardingLoginLeftFrame>
            <S.BoardingLoginLeftComponents>
              <p className="login_title">로그인</p>
              <p className="login_text_1">
                계정이 없으신가요? 계정을 만드시려면 <strong>이곳</strong>을 클릭해주세요.
              </p>
              <S.BoardingLoginInputFrame placeholder="Username" />
              <S.BoardingLoginInputFrame placeholder="Password" />
              <p className="login_text_2">비밀번호를 잃어버리셨나요?</p>

              <S.BoardingLoginLeftComponentsButton onClick={MainPage}>LOGIN</S.BoardingLoginLeftComponentsButton>

              <S.BoardingLoginBar>
                <S.BoardingLoginBarLine />
                <p className="login_text_3">또는</p>
                <S.BoardingLoginBarLine />
              </S.BoardingLoginBar>
              <S.BoardingLoginAuth>
                <S.BoardingLoginAuthButton>
                  <img src="images/icon_kakaotalk.png" alt=""></img>
                </S.BoardingLoginAuthButton>
                <S.BoardingLoginAuthButton>
                  <img src="images/icon_google.png" alt=""></img>
                </S.BoardingLoginAuthButton>
              </S.BoardingLoginAuth>
            </S.BoardingLoginLeftComponents>
          </S.BoardingLoginLeftFrame>
          <S.BoardingLoginRightFrame></S.BoardingLoginRightFrame>
        </S.BoardingLoginFrame>
      </S.Window>
    </div>
  );
}

export default App;

import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/8838592e-ac18-4348-a567-51cec66082e6/KR-ko-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg);
`;
export const Logo = styled.img`
  position: absolute;
  width: 120px;
  top: 0px;
  left: 30px;
  cursor: pointer;
`;
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  background-color: #000;
`;
export const LoginForm = styled.div`
  width: 300px;
`;
export const Title = styled.h1`
  padding-top: 30px;
  color: white;
  font-size: 1.5em;
`;
export const Form = styled.div`
  margin-bottom: 20px;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #333;
`;
export const Button = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
`;
export const LabelMessage = styled.strong`
  display: inline-block;
  color: #e87c03;
  font-weight: 500;
  font-size: 12px;
  margin-top: 6px;
`;
export const Text = styled.p`
  color: #fff;
  text-align: center;
`;

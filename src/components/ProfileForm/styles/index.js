import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 170px;
`;
export const ProfileForm = styled.div`
  width: 250px;
  color: #fff;
`;
export const ProfileImg = styled.img`

  width: 250px;
  border-radius: 10px;
  opacity: 0.8;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    border: 2px solid #808080;
  }
`;
export const Title = styled.h2`
  text-align: center;
`;
export const Text = styled.p`
  text-align: center;
  color: #808080;
  margin: 0;
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
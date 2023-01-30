import React from 'react'
import styled from "styled-components";

export default function Message({ children }) {
  return <MessageContainer>{children}</MessageContainer>;
}

export const MessageContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 20px;
  background-color: #e87c03;
`;
import React from 'react'
import { Inner } from '../../../Globalstyle';
import styled from "styled-components";
import { getPassion } from '../../../API/api';
import { useQuery } from 'react-query';
import user from "../../../img/user.png";

import {
  Right,
  Img,
  Image,
  Listul,
  Listli,
  Username,
  Time,
  Title,
  Content,
} from "./style";

function List() {
  const { isLoading, isError, data } = useQuery("passion", getPassion);
  if (isLoading){
    return ;
  }
  if (isError) {
    return alert("오류입니다! 새로고침을 눌러주세요");
  }
  
  
  return (
    <Inner2>
      <Listul>
        {data.map((item) => {
          return (
            <Listli key={item.id}>
              <Right>
                <img src={user} alt="아이콘" />
                <Username>{item.username}</Username>
                <Time>{item.time}</Time>
              </Right>
              <Image>
                <Img src={item.url} alt="패션이미지" />
              </Image>
              <div>
                <Title>{item.title}</Title>
                <Content>{item.text}</Content>
              </div>
            </Listli>
          );
        })}
      </Listul>
    </Inner2>
  );
}
const Inner2 = styled(Inner)`
  margin:60px auto ;
`;

export default List
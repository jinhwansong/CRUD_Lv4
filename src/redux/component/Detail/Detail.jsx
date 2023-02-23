import React from 'react'
import {
  Inner,
  Innerpadding,
  Right,
  Username,
  Time,
  Listul,
} from "../../../Globalstyle";
import user from "../../../img/user.png";
import { Leftbox, Img, Rightbox, Textbox, Title } from "./style";
import {useQuery } from "react-query";
import { getPassion } from '../../../API/api';
import { useParams } from 'react-router-dom';
function Detail() {
  //이전 컴포넌트에서 id값을 가져온다.
  const {id} = useParams();
  //조회리액트쿼리를 가져온다.
  const { isLoading, isError, data } = useQuery("passion", getPassion);
  if (isLoading) {
    return <h1>"성공햇습니다!"</h1>;
  }
  if (isError) {
    return <h1>"오류입니다! 새로고침을 눌러주세요"</h1>;
  }
  //data중에 id값이 같은거를 가져온다.
  const item = data.filter((item) => item.id === id);

  console.log(item[0]);
  return (
    <Innerpadding>
      <Inner>
        <Listul>
          <Leftbox>
            <Img src={item[0].url} alt="스타일" />
          </Leftbox>
          <Rightbox>
            <Right>
              <img src={user} alt="아이콘" />
              <Username>{item[0].username}</Username>
              <Time>{item[0].time}</Time>
            </Right>
            <Textbox>
              <Title>{item[0].title}</Title>
              <p>{item[0].text}</p>
            </Textbox>
          </Rightbox>
        </Listul>
      </Inner>
    </Innerpadding>
  );
}

export default Detail
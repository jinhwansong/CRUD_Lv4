
import React, { useState } from 'react'
import {
  Title,
  Context,
  Button,
  InputBox,
  Input,
  Label,
  SubmitImg,
  SubmitImgbox,
} from "./style";
import { Inner } from "../../../Globalstyle";
import styled from "styled-components";
import { onchangePassion } from "../../../API/api";
import { useQueryClient,useMutation } from 'react-query';
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ko";
function Correction() {
  const Timechage = moment().fromNow();
  const navigate = useNavigate();
  const { id } = useParams();

  const [titleChange, setHandlerChange] = useState("");
  const titleHandlerChange=(e)=>{
    setHandlerChange(e.target.value)
  }

  const [usernameChange, setUsernameChange] = useState("");
  const usernameHandlerChange = (e) => {
    setUsernameChange(e.target.value);
  };

  const [textChange, setTextChange] = useState("");
  const textHandlerChange = (e) => {
    setTextChange(e.target.value);
  };

  const quertClient = useQueryClient();
  const swichmurarion = useMutation(onchangePassion, {
    onSuccess: () => {
      quertClient.invalidateQueries("passion");
      console.log("성공하였습니다.");
    },

  });
  //미리보기를 구현하기위한 스테이트
  const [imgBaseChange, setImgBaseChange] = useState([]);
  //이미지파일을 받는 스테이트
  //const [imgFile, setImgFile] = useState([]);
  const imgHandlerChange = (event) => {
    //console.log(event.target.files);
    //파일을 받아오는 이벤트
    //setImgFile(event.target.files);
    setImgBaseChange([]);

    for (let i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        //파일을 버퍼에 저장시켜줌
        //정확히는 해당 파일 리더를 통해서 파일 정보를 읽는다
        let reader = new FileReader();
        //파일 정보를 입력한다.!
        reader.readAsDataURL(event.target.files[i]);
        //파일 상태 업데이트
        reader.onloadend = () => {
          //파일 읽기가 완료되면 아래코드가 실행된다.
          //reader.result는 파일을 비트맵 데이터를 리턴시켜준다.
          const base = reader.result;
          //console.log(base)
          if (base) {
            //비트맵 데이터를 저장 가능하도록 스트링으로 바꾼다.
            const baseSub = base.toString();
            //imgBase에 baseSub를 붙인 새로운 배열을 스테이트 한다.
            setImgBaseChange((imgBaseChange) => [...imgBaseChange, baseSub]);
          }
        };
      }
    }
  };
  
  const onChangeBtn = (e) => {
    if (titleChange.trim() === "") {
      alert("제목을 적어주세요");
      return;
    } else if (usernameChange.trim() === "") {
      alert("작성자명을 적어주세요");
      return;
    } else if (textChange.trim() === "") {
      alert("사진 내용을 적어주세요");
      return;
    }
      const passionChange = {
        title: titleChange,
        username: usernameChange,
        text: textChange,
        id: id,
        time:Timechage,
        url: imgBaseChange,
      };
    swichmurarion.mutate(passionChange);
    navigate("/");
  }
  return (
    <Inner2>
      <Title
        type="text"
        placeholder="50자내로 제목을 수정해주세요"
        maxLength={50}
        value={titleChange}
        onChange={titleHandlerChange}
      />
      <Title
        type="text"
        placeholder="10자내로 작성자명을 수정해주세요"
        value={usernameChange}
        maxLength={10}
        onChange={usernameHandlerChange}
      />
      <Context
        type="text"
        placeholder="사진에 대한 내용을 수정해서 적어주세요"
        value={textChange}
        onChange={textHandlerChange}
      />
      <InputBox>
        <Input
          type="file"
          accept="image/png,image/jpg,image/jpeg"
          onChange={imgHandlerChange}
        />
        <Label htmlFor="imagebox">
          업로드할 사진을 추가해주세요(최대 1개입니다)
        </Label>
      </InputBox>
      <SubmitImgbox>
        {imgBaseChange.map((item) => {
          return <SubmitImg src={item} alt="First slide" />;
        })}
      </SubmitImgbox>
      <Button onClick={onChangeBtn}>수정하기</Button>
    </Inner2>
  );
}

const Inner2 = styled(Inner)`
  width: 700px;
  margin: 80px auto;
  font-size: 0;
`;
export default Correction;



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
import { Inner, Innerpadding } from "../../../Globalstyle";
import styled from "styled-components";
import { addPassion } from "../../../API/api";
import { useQueryClient,useMutation } from 'react-query';
import { v4 as uuidv4 } from "uuid";
import {useNavigate } from 'react-router-dom';
import moment from "moment";
import "moment/locale/ko";
function Submit() {
  
  const Time = moment().fromNow()
  //console.log(Time)
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const titleHandler = (e) => {
    setTitle(e.target.value);
    
  };
  const [username, setUsername] = useState("");
  
  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
 
  const [text, setText] = useState("");
  const textHandler = (e) => {
    setText(e.target.value);
  };

  const quertClient = useQueryClient();

  const murarion = useMutation(addPassion, {
    onSuccess: () => {
      quertClient.invalidateQueries("passion");
      console.log("성공하였습니다.");
    },
  });
  //미리보기를 구현하기위한 스테이트
  const [imgBase, setImgBase] = useState([])
  //이미지파일을 받는 스테이트
  //const [imgFile, setImgFile] = useState([]);
  const imgHandler = (event) => {
    //console.log(event.target.files);
    //파일을 받아오는 이벤트
    //setImgFile(event.target.files);
    setImgBase([])
  
    for(let i=0; i<event.target.files.length;i++){
      if(event.target.files[i]){
        //파일을 버퍼에 저장시켜줌
        //정확히는 해당 파일 리더를 통해서 파일 정보를 읽는다
        let reader = new FileReader();
        //파일 정보를 입력한다.!
        reader.readAsDataURL(event.target.files[i])
        //파일 상태 업데이트
        reader.onloadend=()=>{
          //파일 읽기가 완료되면 아래코드가 실행된다.
          //reader.result는 파일을 비트맵 데이터를 리턴시켜준다.
          const base = reader.result;
          //console.log(base)
          if(base){
            //비트맵 데이터를 저장 가능하도록 스트링으로 바꾼다.
            const baseSub = base.toString();
            //imgBase에 baseSub를 붙인 새로운 배열을 스테이트 한다.
            setImgBase((imgBase) => [...imgBase, baseSub]);
          }
        }
      }
    }
  };
  
  const onSumbitBtn= (e)=>{
    e.preventDefault();
    if (title.trim() === "") {
      alert("제목을 적어주세요")
      return
    } else if (username.trim() === "") {
      alert("작성자명을 적어주세요")
      return
    } else if (text.trim() === "") {
      alert("사진 내용을 적어주세요");
      return;
    }
    // console.log("text", imgFile);
    // const formdata = new FormData(

    // )
    // formdata.append
    const newPassion = {
      title: title,
      username: username,
      text: text,
      Done: false,

      id: uuidv4(),
      time: Time,
      url: imgBase,
    };

    murarion.mutate(newPassion);
    setTitle("");
    setUsername("");
    setText("");
    navigate("/");
  }
  return (
    <Innerpadding>
      <Inner2>
        <form onSubmit={onSumbitBtn}>
          <Title
            type="text"
            placeholder="50자내로 제목을 작성해주세요"
            maxLength={50}
            value={title}
            onChange={titleHandler}
          />
          <Title
            type="text"
            placeholder="10자내로 작성자명을 작성해주세요"
            value={username}
            maxLength={10}
            onChange={usernameHandler}
            oninput="nameOnInput(this, 10)"
          />
          <Context
            type="text"
            placeholder="사진에 대한 내용을 적어주세요"
            maxLength={500}
            value={text}
            onChange={textHandler}
          />
          <InputBox>
            <Input
              type="file"
              // multiple
              accept="image/png,image/jpg,image/jpeg"
              onChange={imgHandler}
            />
            <Label htmlFor="imagebox">
              업로드할 사진을 추가해주세요(최대 1개입니다)
            </Label>
          </InputBox>
          <SubmitImgbox>
            {imgBase.map((item) => {
              return <SubmitImg src={item} alt="First slide" />;
            })}
          </SubmitImgbox>
          <Button type="submit">업로드하기</Button>
        </form>
      </Inner2>
    </Innerpadding>
  );
}

const Inner2 = styled(Inner)`
  width: 700px;
  font-size: 0;
`;
export default Submit



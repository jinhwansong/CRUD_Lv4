import React, { useState } from "react";
import { Inner } from '../../../Globalstyle';
import styled from "styled-components";
import { getPassion, onDelPassion } from "../../../API/api";
import { useQuery } from 'react-query';
import user from "../../../img/user.png";
import { MdMoreVert } from "react-icons/md";
import { useQueryClient, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  Modalcontent,
  ModalButton,
  Modalbg,
} from "./style";


function List() {
  //모달페이지
  const [modalOpen, setModalopen] = useState(false);
  const modalBtn = (id) => {
    setModalopen(id);
  };
  const closeModal = () => {
    setModalopen(false);
  };
  // useEffect(() => {
  //   if (modalOpen) {
  //     document.body.style = `overflow:hidden`;
  //   } else if (modalOpen === false) {
  //     document.body.style = `overflow:auto`;
  //   }
  // }, [modalOpen]);

  const queryClient = useQueryClient();

  //삭제 
  const Delmurarion = useMutation(onDelPassion, {
    onSuccess: () => {
      queryClient.invalidateQueries("passion");
    },
  });
  const delBtn = (id) => {
      if (window.confirm("삭제하시겠습니까?")) {
        Delmurarion.mutate(id);
        alert("삭제되었습니다.");
      } else {
        Delmurarion.mutate();
        alert("취소되었습니다.");
      }
  };

  const { isLoading, isError, data } = useQuery("passion", getPassion);
  if (isLoading) {
    return;
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
              <Top>
                <Right>
                  <img src={user} alt="아이콘" />
                  <Username>{item.username}</Username>
                  <Time>{item.time}</Time>
                </Right>
                <div>
                  <MdMoreVert2 onClick={() => modalBtn(item.id)} />
                  {modalOpen === item.id && (
                    <Modalbg setModalopen={setModalopen} item={item}>
                      <Modalcontent>
                        <ModalButton onClick={() => delBtn(item.id)}>
                          삭제
                        </ModalButton>
                        <Link to={`/${item.id}`} key={item.id}>
                          수정
                        </Link>
                        <ModalButton onClick={() => closeModal()}>
                          닫기
                        </ModalButton>
                      </Modalcontent>
                    </Modalbg>
                  )}
                </div>
              </Top>
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
const Top = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
`
const MdMoreVert2 = styled(MdMoreVert)`
  cursor: pointer;
  position:relative;
  right:-5px
`

const Inner2 = styled(Inner)`
  margin:60px auto ;
`;

export default List
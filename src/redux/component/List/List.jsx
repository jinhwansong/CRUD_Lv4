import React, { useState } from "react";
import {
  Inner,
  Innerpadding,
  Right,
  Username,
  Time,
  Listul,
} from "../../../Globalstyle";
import styled from "styled-components";
import { getPassion, onDelPassion } from "../../../API/api";
import { useQuery } from 'react-query';
import user from "../../../img/user.png";
import { MdMoreVert } from "react-icons/md";
import { useQueryClient, useMutation } from "react-query";
import { Link } from "react-router-dom";
import {
  Img,
  Image,
  Listli,
  Title,
  Content,
  Modalcontent,
  ModalButton,
  Modalbg,
} from "./style";


function List() {
  //const navigate = useNavigate("");
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
    return <h1>"성공햇습니다!"</h1>;
  }
  if (isError) {
    return <h1>"오류입니다! 새로고침을 눌러주세요"</h1>;
  }
  


  return (
    <Innerpadding>
      <Inner>
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
                          <ModalButton>
                            <Link2 to={`/${item.id}/correction`} key={item.id}>
                              수정
                            </Link2>
                          </ModalButton>
                          <ModalButton onClick={() => closeModal()}>
                            닫기
                          </ModalButton>
                        </Modalcontent>
                      </Modalbg>
                    )}
                  </div>
                </Top>
                <Image>
                  <Link to={`/${item.id}`} key={item.id}>
                    <Img src={item.url} alt="패션이미지" />
                  </Link>
                </Image>
                <div>
                  <Title>{item.title}</Title>
                  <Content>{item.text}</Content>
                </div>
              </Listli>
            );
          })}
        </Listul>
      </Inner>
    </Innerpadding>
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
const Link2 = styled(Link)`
  width: 100%;
  display: block;
  color: #000;
  text-decoration: none;
  line-height: 50px;
  &&:hover {
    color: #fff;
  }
`;


export default List
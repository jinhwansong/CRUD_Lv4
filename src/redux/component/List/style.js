import styled from "styled-components";

const Fliterlist = styled.div`
  display:flex;
`
const FliterBtn = styled.button`
  margin-right:15px;
  border:0;
  line-height: 1;
  outline: 0;
  background-color: #fff;
  cursor: pointer;
  font-weight: 500;
  position: relative;
  line-height: 1;
  &&::after{
    content:'';
    position: absolute;
    left: -8px;
    top: 0;
    bottom: 0;
    margin: auto;
    background:#000;
    border-radius: 10px;
    width:3px;
    height:3px
  }
`

const Listul = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
const Listli = styled.li`
  margin-top:30px;
  width:386px;
  margin-right:21px;
  &:nth-child(3n){
      margin-right:0;
    }
  &:nth-child(-n+3){
      margin-top:0;
    }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  font-size: 0;
  padding-bottom: 113.47%;
  overflow: hidden;
  margin-bottom:20px
`;
const Img = styled.img`
  width:100%;
  position: absolute;
  top:0;
  margin:auto;
  bottom: 0;
  left: 0;
  right: 0;
  
`
const Right = styled.div`
  display:flex;
  align-items: center;
  margin-bottom:15px;
`
const Username = styled.p`
  max-width:150px;
  margin-right:20px;
  margin-left:10px;

  line-height:1;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  
`
const Time = styled.p`
  line-height:1;
    position:relative;
  &::after{
    position:absolute;
    content: '';
    width:3px;
    height:3px;
    border-radius: 3px;
    margin:auto;
    left:-12px;
    top:0;
    bottom: 0;;
    background:#000
  }
`
const Title = styled.em`
display:block;
color:#222;
font-weight:600;
line-height:1;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
font-size:18px;
`
const Content = styled.p`
  color:#555;
  line-height: 20px;
  max-height:40px;
  margin-top:10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Modalbg = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  display:flex;
  align-items: center;
  justify-content: center;
`;
const Modalcontent = styled.div`
  width:300px;
  border-radius:10px;
  overflow: hidden;
  background:#fff;
`;
const ModalButton = styled.button`
  width: 100%;
  height: 50px;
  background: #fff;
  border: 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  outline: 0;
  &&:hover {
    color: #fff;
    background: #3e56e9;
  }
  &&:last-child {
    border-bottom: 0;
  }
`;
export {Fliterlist,Right,Img,Image,Listul,Listli,FliterBtn,Username,Time,Title,Content,Modalcontent,ModalButton,Modalbg}
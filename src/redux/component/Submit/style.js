import styled from "styled-components";
import upload from '../../../img/upload.png'
const Title = styled.input`
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  font-weight:500;
  
`;
const Context = styled.textarea`
  width: 100%;
  height: 250px;
  
`;
const InputBox = styled.div`
  border: 1px dashed #ddd;
  width: 100%;
  position: relative;
  height: 300px;
  box-sizing: border-box;
  font-size: 0;
  margin-top: 30px;
  background: #f8f9fa;
  display:flex;
  justify-content:center;
  align-items: center;
`;
const Input = styled.input`
    position: absolute;
    width:100%;
    height:100%;
    opacity: 0%;
    cursor: pointer;
`
const Label = styled.label`
  color: #adb5bd;
  font-size:15px;
  text-align:center;
  padding-top:70px;
  background-image:url('${upload}' );
  background-repeat: no-repeat;
  background-position:top center;
`
const Button = styled.button`
    background: #3e56e9;
    color:#fff;
    height:50px;
    line-height:50px;
    text-align:center;
    width:100%;
    margin-top:30px;
    outline: 0;
    border:0;
    cursor: pointer;

`
const SubmitImg = styled.img`
  width:100%;
  margin-top:20px;
`
const SubmitImgbox = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-between;
`

export {Context,InputBox,Input,Label,Title,Button,SubmitImg,SubmitImgbox}
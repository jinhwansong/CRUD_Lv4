import styled from 'styled-components';

const Bottom = styled.div`
    height:75px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    font-size: 30px;
    font-family: 'Gloock', serif;
`

const Slide = styled.div`
    width:100%;
    height:310px;
`
const Input = styled.input`
    width:450px;
    border: 1px solid #eee;
    height:45px;
    padding:15px 40px 15px 20px;
    border-radius: 30px;
`
const Search = styled.div`
    position:relative;
`
const Label = styled.label`
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     right: 25px;
     cursor: pointer;
   `;
export {Title,Bottom,Slide,Input,Search,Label} 
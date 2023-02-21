import styled from 'styled-components';
const Top = styled.div`
  background:#000;
  width:100%;
  height: 34px;
  color:#fff;
  line-height: 34px;
  text-align:center;
`
const Bottom = styled.div`
    height:75px;
    display:flex;
    align-items: center;
    justify-content: space-between;
`
const Title = styled.h1`
    font-size: 30px;
    font-family: 'Gloock', serif;
    font-weight: 400;
`
const Icon = styled.ul`
    display:flex;
    align-items: center;
`
const Iconli = styled.li`
    margin-left:20px
`
const Slide = styled.div`
    width:100%;
    height:310px;
`
const Input = styled.input`
    width:450px;
    outline: 0;
    border: 1px solid #eee;
    height:45px;
    padding:15px 40px 15px 20px;
    box-sizing: border-box;
    border-radius: 30px;
    &:focus{
        border:1px solid #3e56e9;
    }
`
const Search = styled.div`
    position:relative;
`

export {Top,Title,Bottom,Icon,Iconli,Slide,Input,Search} 
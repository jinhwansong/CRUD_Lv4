import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
const Globalstyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Medium';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-SemiBold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Pretendard-Bold';
        src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
        font-weight: 700;
        font-style: normal;
    }
     @font-face {
        font-family: 'Gloock';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('https://fonts.gstatic.com/s/gloock/v1/Iurb6YFw84WUY4NJiBak.woff2') format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    body{
        font-family: 'Pretendard';
        font-weight: 400;
        font-size:15px;
        color:#000;
        line-height: 1.7;
    }
    a{text-decoration: none;color: #000;}
    input,textarea{box-sizing: border-box;outline: 0;border: 1px solid #eee;padding: 15px 15px;}
    input:focus,textarea:focus{border: 1px solid #3e56e9;}


`
const Inner = styled.div`
    width:1200px;
    margin:0 auto;
    overflow: hidden;
`
const Innerpadding = styled.div`
    margin:60px 0;
`
const Right = styled.div`
  display:flex;
  align-items: center;
  margin-bottom:15px;
`
const Listul = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Username = styled.p`
  max-width:200px;
  margin-right:20px;
  margin-left:15px;
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
export {Globalstyle,Inner,Innerpadding,Right,Username,Time,Listul}
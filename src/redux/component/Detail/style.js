import styled from 'styled-components';

const Leftbox = styled.div`
  width: 600px;
  margin-right: 40px;
`;
const Img = styled.img`
  width: 100%;
  font-size: 0;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;
const Rightbox = styled.div`
  width: calc(100% - 640px);
  height: 905px;
  overflow-y: scroll;
  word-break: keep-all;
  &::-webkit-scrollbar{
    width:1px;
    background:#fff;
  }
`;
const Textbox = styled.div`
  margin: 20px 0 ;
  padding: 21px 0;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  max-height:600px;
`;
const Title = styled.em`
  display:block;
  font-size:18px;
  line-height:26px;
  font-weight:600;
  margin-bottom:10px;
`
export {Leftbox,Img,Rightbox,Textbox,Title}
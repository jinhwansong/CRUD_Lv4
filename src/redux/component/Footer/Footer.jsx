import React from 'react'
import styled from "styled-components";
function Footer() {
  const date = new Date();
  const year = date.getFullYear()
  //console.log(Date);
  return <Bottom>© {year} Codipocket. All Rights Reserved.</Bottom>;
}

const Bottom = styled.div`
    text-align: center;
    width:100%;
    height:50px;
    line-height: 50px;
    border-top:1px solid #eee;
`
export default Footer
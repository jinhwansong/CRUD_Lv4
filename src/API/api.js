//axios 요청이 들어가는 모든 모듈
import axios from "axios";

//조회
const getPassion = async()=>{
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/passion`)
    return response.data
}

//추가
const addPassion = async (newPassion)=>{
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/passion`,newPassion)
}

// //제거
// const onDelPassion = async (id)=>{
//     await axios.delete(`${process.env.REACT_APP_SERVER_URL}/passion/${id}`)
//     //console.log('respon',respon)
// }
// //변경
// const onchangePassion = async(id)=>{
//     await axios.patch(`${process.env.REACT_APP_SERVER_URL}/passion/${id}`)
// }

export {getPassion,addPassion}
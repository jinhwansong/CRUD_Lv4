import {
  Bottom,
  Title,
  Input,
  Search,
  Slide,
  Label,
} from "./style";
import { Inner } from '../../../Globalstyle';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import viaul01 from "../../../img/viaul01.jpg";
import viaul02 from "../../../img/viaul02.jpg";
import SwiperCore, { Autoplay } from "swiper";	
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


function Header() {
   const TOPLink = styled(Link)`
     background: #000;
     width: 100%;
     height: 34px;
     color: #fff;
     line-height: 34px;
     text-align: center;
     display:block;
   `;
   const Links2 = styled(Link)`
     color: #fff;
     background: #3e56e9;
     width:100px;
     height:45px;
     border-radius: 10px;
     text-align: center;
     line-height:45px;
   `;
   const Swipers = styled(Swiper)`
    border-top:1px solid #eee
   `;

   
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <TOPLink to="Submit"> 나만의 패션을 등록해보세요!</TOPLink>

      <Inner>
        <Bottom>
          <Title>
            <Link to="/">Codipocket</Link>
          </Title>
          <Search>
            <Input type="text" placeholder="작성자명을 적어주세요" />
            <Label htmlFor="search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Label>
          </Search>
          <Links2 to="Submit">업로드</Links2>
        </Bottom>
      </Inner>
      <Swipers
        autoplay={{ delay: 10000, disableOnInteraction: false }} //자동슬라이드 (false-비활성화)
        slidesPerView={1}
        centeredSlides={true} //센터모드
        loop={false} // 슬라이드 반복 여부
      >
        <SwiperSlide>
          <Slide style={{ background: `url('${viaul01}') center center` }} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide style={{ background: `url('${viaul02}') center center` }} />
        </SwiperSlide>
      </Swipers>
    </div>
  );
}

export default Header
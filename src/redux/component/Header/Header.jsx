import {
  Top,
  Bottom,
  Title,
  Icon,
  Iconli,
  Input,
  Search,
  Slide,
} from "./style";
import { Inner } from '../../../Globalstyle';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import {
  faUser,
  faMagnifyingGlass,
  faCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import viaul01 from "../../../img/viaul01.jpg";
import viaul02 from "../../../img/viaul02.jpg";
import SwiperCore, { Autoplay } from "swiper";	
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";


function Header() {
   const Links = styled(Link)`
     text-decoration: none;
     color: #000;
   `;
   const TOPLink = styled(Link)`
     text-decoration: none;
     color: #fff;
   `;
   const Links2 = styled(Link)`
     text-decoration: none;
     color: #000;
   `;
   const FontAwesomeIcons = styled(FontAwesomeIcon)`
    width:18px;
    height:18px;
   `
   const Swipers = styled(Swiper)`
    border-top:1px solid #eee
   `;
   const SearchIcons = styled(FontAwesomeIcon)`
     
     width: 15px;
     height: 15px;
   `;
   const Label = styled.label`
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     right: 25px;
     cursor: pointer;
   `;
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Top>
        <TOPLink to="Submit"> 나만의 패션을 등록해보세요!</TOPLink>
      </Top>
      <Inner>
        <Bottom>
          <Title>
            <Links to="/">Codipocket</Links>
          </Title>
          <Search>
            <Input
              type="text"
              id="search"
              placeholder="작성자명을 적어주세요"
            />
            <Label htmlFor="search">
              <SearchIcons icon={faMagnifyingGlass} />
            </Label>
          </Search>
          <Icon>
            <Iconli>
              <Links2 to="Submit">
                <FontAwesomeIcons icon={faCircleUp} />
              </Links2>
            </Iconli>
            <Iconli>
              <FontAwesomeIcons icon={faUser} />
            </Iconli>
          </Icon>
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
    </>
  );
}

export default Header
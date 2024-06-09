



import { Swiper, SwiperSlide } from 'swiper/react';
// import AwesomeButton from 'react-awesome-button/src/components/AwesomeButton';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import pic1 from '../../../../public/img/home1.jpg'
import pic2 from '../../../../public/img/home2.jpg'
import pic3 from '../../../../public/img/home3.jpg'
import pic4 from '../../../../public/img/home4.jpg'
import pic5 from '../../../../public/img/home5.jpg'
import pic6 from '../../../../public/img/home6.jpg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';


const Banner = () => {

  const { logOut, user } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  return (
    <div className='mt-5 mb-5'>
      <h3 className='md:text-4xl text-center font-Pacifico space-y-3 sm:text-2xl'>WHERE TOUR DREAMS TAKES <br /> <br /> OFF
        <br /> <br />
        <span className='text-cyan-600'>EMUS EVENT</span></h3>
      <div className='text-center mt-6'>
        {
          user ? <button onClick={handleSignOut} className="btn btn-active btn-secondary ">I am User</button>
            :
            <Link to='/login'>
              <button className="btn btn-active btn-secondary ">Get Start Now</button>
            </Link>
        }


      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;


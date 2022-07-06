import React from 'react'

// import Swiper core and required modules
// import { Navigation} from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';

const data = [
  {
      name: 'Lejek plastikowy PEMD gigant skośny',
      code: 'LEJG',
      url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-pemd-gigant-skosny-lejg-12669',
      image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-skosny-LEJG-12669_1.png',
  },
  {
    name: 'Lejek plastikowy PEMD gigant prosty',
    code: 'LEJG',
    url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-pemd-gigant-prosty-lejg-12670',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-prosty-LEJG-12670_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-PEMD-gigant-prosty-LEJG-12670_2.png',
  },
  {
    name: 'Lejek plastikowy lider 3 częsciowy do paliw',
    code: 'LID3',
    url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-lider-3-czesciowy-do-paliw-lid3-12671',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-lider-3-czesciowy-do-paliw-LID3-12671_1.png',
  },
  {
    name: 'Lejek plastikowy, prosty LIDER ',
    code: 'LEJPL',
    url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-prosty-lider-lejpl-12675',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-prosty-LIDER-LEJPL-12675_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-prosty-LIDER-LEJPL-12675_2.png',
  },
  {
    name: 'Sylikon wysokotemperaturowy 360 st 20 ml',
    code: 'SIL20M',
    url: 'https://b2b-amracing.pl/pl/products/sylikon-wysokotemperaturowy-360-st-20-ml-sil20m-12676',
    image1: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-20-ml-SIL20M-12676_1.jpg',
  },
  {
    name: 'Sylikon wysokotemperaturowy 360 st 40 ml',
    code: 'SILA',
    url: 'https://b2b-amracing.pl/pl/products/sylikon-wysokotemperaturowy-360-st-40-ml-sila-12677',
    image1: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-40-ml-SILA-12677_1.png',
    image2: 'https://amracing.pl/pol_pl_Sylikon-wysokotemperaturowy-360-st-40-ml-SILA-12677_2.png',
  },
  {
    name: 'Wazelina techniczna 0,9 kg / 900 g',
    code: 'WAZEL',
    url: 'https://b2b-amracing.pl/pl/products/wazelina-techniczna-0-9-kg-900-g-wazel-12679',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-0-9-kg-900-g-WAZEL-12679_1.png',
  },
  {
    name: 'Smar grafitowy 90 ml , tubka',
    code: 'SGRT',
    url: 'https://b2b-amracing.pl/pl/products/smar-grafitowy-90-ml-tubka-sgrt-12680',
    image1: 'https://amracing.pl/pol_pl_Smar-grafitowy-90-ml-tubka-SGRT-12680_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-grafitowy-90-ml-tubka-SGRT-12680_2.png',
  },
  {
    name: 'Smar do łożyska ŁT-43 80 ml ',
    code: 'SLTT',
    url: 'https://b2b-amracing.pl/pl/products/smar-do-lozyska-lt-43-80-ml-sltt-12682',
    image1: 'https://amracing.pl/pol_pl_Smar-do-lozyska-LT-43-80-ml-SLTT-12682_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-do-lozyska-LT-43-80-ml-SLTT-12682_2.png',
  },
  {
    name: 'Smar miedziowy / miedziany 120 ml',
    code: 'SMP',
    url: 'https://b2b-amracing.pl/pl/products/smar-miedziowy-miedziany-120-ml-smp-12683',
    image1: 'https://amracing.pl/pol_pl_Smar-miedziowy-miedziany-120-ml-SMP-12683_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-miedziowy-miedziany-120-ml-SMP-12683_2.png',
  },
  {
    name: 'Smar przegubowy 140 g',
    code: 'SP',
    url: 'https://b2b-amracing.pl/pl/products/smar-przegubowy-140-g-sp-12684',
    image1: 'https://amracing.pl/pol_pl_Smar-przegubowy-140-g-SP-12684_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Smar-przegubowy-140-g-SP-12684_2.jpg',
  },
  {
    name: 'Talk techniczny 100 g do opon / dętek',
    code: 'TALK',
    url: 'https://b2b-amracing.pl/pl/products/talk-techniczny-100-g-do-opon-detek-talk-12686',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-100-g-do-opon-detek-TALK-12686_1.jpg',
  },
  {
    name: 'Talk techniczny 500 g do opon / dętek',
    code: 'TALK',
    url: 'https://b2b-amracing.pl/pl/products/talk-techniczny-500-g-do-opon-detek-talk-12687',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-500-g-do-opon-detek-TALK-12687_1.jpg',
  },
  {
    name: 'Talk techniczny 1000 g do opon / dętek',
    code: 'TALK1',
    url: 'https://b2b-amracing.pl/pl/products/talk-techniczny-1000-g-do-opon-detek-talk1-12688',
    image1: 'https://amracing.pl/pol_pl_Talk-techniczny-1000-g-do-opon-detek-TALK1-12688_1.jpg',
  },
  {
    name: 'Smar do łożyska 800 g ŁT-43 ',
    code: 'SLT1',
    url: 'https://b2b-amracing.pl/pl/products/smar-do-lozyska-800-g-lt-43-slt1-12681',
    image1: 'https://amracing.pl/pol_pl_Smar-do-lozyska-800-g-LT-43-SLT1-12681_1.png',
    image2: 'https://amracing.pl/pol_pl_Smar-do-lozyska-800-g-LT-43-SLT1-12681_2.png',
  },
  {
    name: 'Wazelina techniczna 60 ml',
    code: 'WAZT',
    url: 'https://b2b-amracing.pl/pl/products/wazelina-techniczna-60-ml-wazt-12678',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-60-ml-WAZT-12678_1.png',
    image2: 'https://amracing.pl/pol_pl_Wazelina-techniczna-60-ml-WAZT-12678_2.png',
  },
  {
    name: 'Lejek plastikowy max 3-częściowy',
    code: 'LEJ2',
    url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-max-3-czesciowy-lej2-12674',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-max-3-czesciowy-LEJ2-12674_1.png',
  },
  {
    name: 'Hermetic 115 ml (klej do uszczelek)',
    code: 'HER',
    url: 'https://b2b-amracing.pl/pl/products/hermetic-115-ml-klej-do-uszczelek-her-12685',
    image1: 'https://amracing.pl/pol_pl_Hermetic-115-ml-klej-do-uszczelek-HER-12685_1.png',
  },
  {
    name: 'Lejki plastikowe 4 szt',
    code: 'LEJP4',
    url: 'https://b2b-amracing.pl/pl/products/lejki-plastikowe-4-szt-lejp4-12672',
    image1: 'https://amracing.pl/pol_pl_Lejki-plastikowe-4-szt-LEJP4-12672_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejki-plastikowe-4-szt-LEJP4-12672_2.png',
  },
  {
    name: 'Lejek plastikowy sztywny, skośny, zielony',
    code: 'LEJS',
    url: 'https://b2b-amracing.pl/pl/products/lejek-plastikowy-sztywny-skosny-zielony-lejs-12673',
    image1: 'https://amracing.pl/pol_pl_Lejek-plastikowy-sztywny-skosny-zielony-LEJS-12673_1.png',
    image2: 'https://amracing.pl/pol_pl_Lejek-plastikowy-sztywny-skosny-zielony-LEJS-12673_2.png',
  },
  {
    name: 'Pasta / Smar miedziowy / miedziany / miedziowy 20 ml',
    code: 'SMT',
    url: 'https://b2b-amracing.pl/pl/products/pasta-smar-miedziowy-miedziany-miedziowy-20-ml-20-200-st-aa1426-smt-10867',
    image1: 'https://amracing.pl/pol_pl_Pasta-Smar-miedziowy-miedziany-miedziowy-20-ml-20-200-st-AA1426-SMT-10867_1.png',
  },
  {
    name: 'Pasta zaworowa 60 g, 2 bardzo gruba ziarnistość',
    code: 'PZ2',
    url: 'https://b2b-amracing.pl/pl/products/pasta-zaworowa-60-g-2-bardzo-gruba-ziarnistosc-aa14241-pz2-10865',
    image1: 'https://amracing.pl/pol_pl_Pasta-zaworowa-60-g-2-bardzo-gruba-ziarnistosc-AA14241-PZ2-10865_1.png',
  },
  {
    name: 'Pasta zaworowa 1 średnia ziarnistość',
    code: 'PZ1',
    url: 'https://b2b-amracing.pl/pl/products/pasta-zaworowa-1-srednia-ziarnistosc-aa14231-pz1-10864',
    image1: 'https://amracing.pl/pol_pm_Pasta-zaworowa-1-srednia-ziarnistosc-AA14231-PZ1-10864_1.png',
  },
  {
    name: 'Pasta zaworowa 60 g, 0 bardzo drobna ziarnistość',
    code: 'PZ',
    url: 'https://b2b-amracing.pl/pl/products/pasta-zaworowa-60-g-0-bardzo-drobna-ziarnistosc-aa14221-pz-10863',
    image1: 'https://amracing.pl/pol_pl_Pasta-zaworowa-60-g-0-bardzo-drobna-ziarnistosc-AA14221-PZ-10863_1.png',
  },
  {
    name: 'Smar grafitowy 140 g puszka',
    code: 'SGR',
    url: 'https://b2b-amracing.pl/pl/products/smar-grafitowy-140g-lancuch-srub-zaworow-puszka-aa1441-sgr-10755',
    image1: 'https://amracing.pl/pol_pl_Smar-grafitowy-140-g-puszka-SGR-AA1441-10755_1.png',
  },
  {
    name: 'Wazelina techniczna 50g',
    code: 'WAZ50',
    url: 'https://b2b-amracing.pl/pl/products/wazelina-techniczna-50g-bezkwasowa-do-uszczelek-oringow-aa1451-waz50-10756',
    image1: 'https://amracing.pl/pol_pl_Wazelina-techniczna-50g-AA1451-WAZ50-10756_1.png',
  },
  {
    name: 'Pasta do tłoczków i cylinderków 5ml',
    code: 'PTH',
    url: 'https://b2b-amracing.pl/pl/products/pasta-do-tloczkow-i-cylinderkow-5ml-aa1425-pth-10866',
    image1: 'https://amracing.pl/pol_pl_Pasta-do-tloczkow-i-cylinderkow-5ml-AA1425-PTH-10866_1.png',
  }
]

const List = () => {
  return (
    <div className='container'>
      <div className='row'>
          {
            data.map(({code, name, url, image1, image2, image3, image4}) => {
              return (
              <div className='col-3'>
                <div className="swiper__container text-center mb-5 mt-5">
                  <Swiper
                  // modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  // navigation
                  pagination={{ clickable: true }}

                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  >
                    <SwiperSlide><img src={image1} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image2} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image3} className='image' /></SwiperSlide>
                    <SwiperSlide><img src={image4} className='image' /></SwiperSlide>
                    
                  </Swiper>

                  <p className=''>({code})</p>
                  <p className='name'>{name}</p>
                  <div className="my-auto button_link">
                    <a href={ url }>Otwórz na stronie</a>
                  </div>


                  {/* <div  className='col-md-2 my-auto'>
                    <a href={image1}><img src={image1} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image2}><img src={image2} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image3}><img src={image3} className='image'/></a>
                  </div>
                  <div  className='col-md-2 my-auto'>
                    <a href={image4}><img src={image4} className='image'/></a>
                  </div> */}
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
  )
}

export default List
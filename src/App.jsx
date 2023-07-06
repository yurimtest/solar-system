import { useState } from "react";
import { useEffect, useRef } from "react";

function App() {
  let [searchbox,setSearchbox] = useState(false);
  let [carouselClick,setCarouselClick] = useState(0);
  
  useEffect(()=> {
    document.querySelector('.slide-container').style.transform = 'translate(${ -100 * carouselClick }vw)';
  },[carouselClick]);

  const left = () => {
    setCarouselClick(carouselClick == 0 ? 2 : carouselClick - 1);
  };

  const right = () => {
    setCarouselClick(carouselClick == 2 ? 0 : carouselClick + 1);
  };
  
  return (
   <div>
    <div>
      <div className="banner h-[100%]">
         {/* navbar */}
         <div className="flex  space-x-5 mt-10 lg:space-x-[50px] xl:space-x-[180px] lg:mt-14 justify-center">
            <div className="w-8 lg:w-11">
              <img src="./img/logo.png"/>
            </div>
            <div className="banner-txt flex space-x-5 items-center justify-center text-[8pt] lg:text-[18px] xl:text-[20px] lg:space-x-10">
             <p className="hover:text-[#a1a1a1]">INTRODUCTION</p>
             <p className="hover:text-[#a1a1a1]">HISTORY</p>
             <p className="hover:text-[#a1a1a1]">NEWS</p>
             <p className="hover:text-[#a1a1a1]">SOLAR SYSTEM</p>
             <p className="hover:text-[#a1a1a1]">TECHNOLOGY</p>
            </div>
            <svg onClick={()=>{setSearchbox(!searchbox)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
              className="hover:w-[25px] hover:h-[25px] lg:hover:w-[40px] lg:hover:h-[40px] ease-out duration-300
              text-[#a1a1a1] w-5 h-5 lg:w-8 lg:h-8 lg:mt-2 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
         </div>
         {/* search-box*/}
         {
          searchbox == true ? <Searchbox setSearchbox={setSearchbox} searchbox={searchbox}/> : null
         }
        {/* ASTRONOMY */}
         <div className="headline mt-[20px] lg:mt-[100px] w-[320px] lg:w-[500px] xl:w-fit">
          <img src="./img/galaxy-headline.png"/>
         </div>
         {/* lg일때 나타나는 화살표 */}
         <div className="justify-center hidden lg:mt-[230px] lg:flex xl:mt-[370px]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" className="animate-bounce w-14 h-14 text-slate-700">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
          </svg>
         </div>
         {/* 태양계의 탄생과 진화 */}
         <Maintext></Maintext>
          {/* 태양계의 구성 헤드라인 */}
          <div className="text-center lg:pt-14 pt-5 pb-8 bg-[#141414] lg:bg-black">
            <h4 className="lg:text-[20px] xl:text-[23px] headtitle">태양계의 구성</h4>
            <h1 className="lg:text-[18px] xl:text-[20px] lg:mb-5 headtitle-english">The Composition of the Solar System</h1>
            <p className="lg:text-[11px] xl:text-[13px] lg:leading-[24px] xl:leading-[30px] text mt-3">
            태양계는 나선 은하인 우리 은하의 나선의 팔 부분에 위치하고 있고, 태양을 중심으로 돌고 있는 수성, 금성, 지구, 화성, 목성, 
            <br></br>토성, 천왕성, 해왕성의 8개의 행성과 세레스, 명왕성, 에리스 등의 왜소행성(Dwarf Planet) 및 각 행성들 주위를 돌고 있는
            <br></br> 위성, 소행성, 그리고 혜성 등으로 이루어져 있다.
            </p>
          </div>
       </div>

       <div className="bg-2">
        {/* 태양계의 구성 캡션 */}
        <p className="caption lg:text-[16px] lg:leading-[25px] lg:ml-20">Click on the planet you<br></br> would like to fly to
        </p>
        {/* 태양계의 구성 - 캐서렐 */}
        <div className="overflow-hidden">
          <div className="slide-container mt-[130px]  flex justify-center lg:mt-[250px] xl:mt-[300px]">
             <div className="slide flex justify-center pl-6 pr-6 pb-10 gap-2 xl:p-20 xl:gap-16  ">
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">태양과 가장 가까운 수성</h1>
                 <h4 className="slide-title-english ">Mercury</h4>
                 <p className="slide-text">태양에서 가장 가까이 있는 행성인 수성은 언제나 태양 옆에 붙어 다니기 때문에 관측하기가 쉽지 않다. 수성을 볼 수 있는 때는 해가 진 직후 서쪽하늘과, 해가 뜨기 직전 동쪽 하늘에서만 볼 수가 있다. </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">가장 밝은 행성, 금성</h1>
                 <h4 className="slide-title-english ">Venus</h4>
                 <p className="slide-text">금성은 우리가 흔히 '샛별' 이라고 부르는 행성으로 해 뜨기 전 동쪽 하늘이나 해진 후 서쪽 하늘에서 보인다. 금성은 그냥 보면 하나의 점처럼 보이지만, 망원경으로 보면 달처럼 그 모습이 변하는 위상을 가지고 있다. </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">우리가 사는 지구</h1>
                 <h4 className="slide-title-english ">Earth</h4>
                 <p className="slide-text">우리가 살고 있는 푸른 행성이 바로 지구이다. 우주에서 봤을 때 푸른색의 바다와 녹색의 산과 갈색의 흙에 흰색의 구름이 조화를 이루고 있는 아름다운 행성이다.현재 지구의 나이는 약 46억 년이라고 알려져 있다.</p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
             </div>
             <div className="slide flex justify-center pl-6 pr-6 pb-10 gap-2 xl:p-20 xl:gap-16 ">
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">붉은 행성, 화성</h1>
                 <h4 className="slide-title-english ">Mars</h4>
                 <p className="slide-text">화성은 영화와 소설의 소재로 많이 쓰이며, 태양계 행성 중 우리의 관심을 가장 많이 끈 행성이다. 지구에 가장 가까이 있고, 여러 가지 에피소드에 의해 생명의 존재 가능성이 제기되어 신비감과 공포감을 동시에 가져다 준 행성이 바로 화성이다.
                </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">가장 큰 행성, 목성</h1>
                 <h4 className="slide-title-english ">Jupiter</h4>
                 <p className="slide-text">태양계의 5번째 궤도를 돌고 있는 목성은 태양계에서 가장 거대한 행성이다. 목성은 태양계 여덟 개 행성을 모두 합쳐 놓은 질량의 2/3이상을 차지하고 지름이 약 14만 3,000km로 지구의 약 11배에 이른다. </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">고리가 아름다운 행성, 토성</h1>
                 <h4 className="slide-title-english ">Saturn</h4>
                 <p className="slide-text">토성은 아름다운 고리를 가진 행성으로 많은 사랑을 받는 행성이다. 토성의 고리는 1610년 갈릴레이에 의해 처음 관측되었으나 망원경의 해상도가 낮아 확실한 모양을 몰랐다. 훗날 네덜란드의 천문학자인 호이겐스에 의해 그것이 고리라는 것이 밝혀졌다.</p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
             </div>
             <div className="slide flex justify-center pl-6 pr-6 pb-10 gap-2 xl:p-20 xl:gap-16">
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">97도로 누워있는 천왕성</h1>
                 <h4 className="slide-title-english ">Uranus</h4>
                 <p className="slide-text">천왕성은 육안이 아닌 망원경으로 발견된 최초의 행성이며, 전 세계 아마추어 천문학자들에게 희망을 주었을 뿐 아니라 발견된 궤도위치가 독일의 천문학자 보데(Johann Elert Bode)가 주장한 보데의 법칙을 증명해주었다 점에서 더 유명해졌다. </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">청록색 진주 해왕성</h1>
                 <h4 className="slide-title-english ">Neptune</h4>
                 <p className="slide-text">태양계 행성중 태양에서 가장 멀리 떨어져 있는 행성을 말하며, 해왕성의 1년은 지구에 비해 164배나 길다. 해왕성 주변에는 대기의 활발한 흐름으로 대흑점이라는 소용돌이가 존재하며 10여 개의 위성과 함께 희미한 고리를 가지고 있다.  </p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
               <div className="slide-box shadow-inner shadow-[#868686]">
                 <h1 className="slide-title">우리가 사는 지구</h1>
                 <h4 className="slide-title-english ">Earth</h4>
                 <p className="slide-text">우리가 살고 있는 푸른 행성이 바로 지구이다. 우주에서 봤을 때 푸른색의 바다와 녹색의 산과 갈색의 흙에 흰색의 구름이 조화를 이루고 있는 아름다운 행성이다.현재 지구의 나이는 약 46억 년이라고 알려져 있다.</p>
                 <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button">READ MORE</button>
               </div>
             </div>
            </div>
           {/* 캐서렐 버튼 버튼을 누르면 transform: translate(-100vw); */}
          <div className="absolute top-[170px] pl-7 pr-7 w-full text-[#6F6F6F] opacity-40">
          <button onClick={left}
             className="hover:text-white transform active:scale-75 transition-transform">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 xl:w-16 xl:h-16">
           <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
           </svg>
          </button>
          <button onClick={right}
           className="float-right hover:text-white transform active:scale-75 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 xl:w-16 xl:h-16">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>

          </button>
          </div>
        </div>
       </div>
       {/*태양계의 구성 - location그래프  */}
       <div className="bg-3">
          <div className="pl-10 pr-10 pb-20 lg:pl-[200px] lg:pr-[200px]">
              <img src="./img/bg-3-image.png" className="w-[100%]"/>
          </div>
       </div>
      {/* 태양계의 작은 가족 헤드라인 */}
       <div className="bg-[#111111] w-full">
        <div className="text-center pt-10 lg:pt-[14] pb-10">
            <h4 className="lg:text-[20px] xl:text-[23px] headtitle">태양계의 작은 가족</h4>
            <h1 className="lg:text-[18px] xl:text-[20px] lg:mb-5 headtitle-english">Small family in the solar system</h1>
            <p className="lg:text-[11px] xl:text-[13px] lg:leading-[24px] xl:leading-[30px] text mt-3">
            행성들 외에도 그들과 함께 태양계를 이루고 있는 것은 소행성, 혜성 그리고 각 행성의 위성 등이 있다. 위성들은 계속 발견되<br></br>고 있으며 
            현재 그 수가 백여 개가 넘는다. 또한 화성과 목성 사이에는 감자 모양으로 생긴 작은 천체들인 소행성들이 띠를 이<br></br>루고 있다. 
            그리고 태양계를 늘 여행하고 다니는 혜성도 태양계의 한 일원으로서 역할을 톡톡히 하고 있다.
            </p>
        </div>
       </div>

      {/* 태양계의 작은 가족 콘텐츠 */}
       <div className="bg-black p-10 lg:pl-[100px] lg:pr-[100px] xl:pl-[140px] xl:pr-[140px]">
         <div className="flex gap-6 lg:gap-12 xl:gap-20 pb-8 lg:pb-14 justify-center">
        <div className="w-6/12">
        <h1 className="text-[10pt] lg:text-[18px] xl:text-[20px] text-[#e3e3e3ee] font-['pretendard-medium']">꼬리 달린 별, 혜성</h1>
            <h4 className="slide-title-english lg:text-[18px] xl:text-[20px] ">Comet</h4>
            <p className="slide-text lg:text-[13px] lg:leading-[28px]">태양이나 큰 질량의 행성에 대하여 타원 또는 포물선 궤도를 가지고 도는 
            태양계 내에 속한 작은 천체를 의미하며 우리말로는 살별이라고 한다.혜성은 초기 태양계가 형성되면서 외곽에 
            존재하게 된 오르트 구름(Oort cloud)으로부터 태양계 내의 중력이나 어떠한 섭동을 받아서 태양계 내로 진입한 
            천체로 보고 있다. 소행성(asteroid)과 크기면에서 비슷하지만, 혜성은 코마(coma)라고 하는 핵 주변을 
            감싸고 있는 대기와 이 주위를 넓게 싸고 있는 수소운이 있고, 이동 중에 생기는 꼬리를 가지고 있다. </p>
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button lg:text-[13px] lg:mt-2">READ MORE</button>
        </div>
        <div className="w-6/12">
        <img src="./img/image_3.jpg" className="w-[100%] h-[100%] lg:h-[300px] object-cover"/>
        </div>
         </div>
         <div className="flex gap-6 lg:gap-20 pb-8 lg:pb-14 justify-center">
        <div className="w-6/12">
        <img src="./img/image_4.jpg" className="w-[100%] h-[100%] lg:h-[300px] object-cover"/>
        </div>
        <div className="w-6/12">
        <h1 className="text-[10pt] lg:text-[18px] xl:text-[20px] text-[#e3e3e3ee] font-['pretendard-medium']">행성이 되지 못한 행성잔여물, 소행성</h1>
            <h4 className="slide-title-english lg:text-[18px] xl:text-[20px]">Asteroid</h4>
            <p className="slide-text lg:text-[13px] lg:leading-[28px]">소행성(Asteroid)은 행성보다 작은, 태양 주위를 공전하는 천체이다. 화성과 목성 궤도 사이에 있는 
            소행성대에서 1801년에 세레스(Ceres)가 발견된 이후 수많은 소행성의 발견이 줄을 이었고, 2010년 1월 30일 현재 231,665개가 
            등재되어 있다. 매년 수천 개 이상의 새로운 소행성들이 발견되고 있어서 앞으로 모두 몇 개가 될지는 아무도 모른다. 
            새로 발견된 소행성은 시기와 순서에 따라 임시 이름이 부여되고, 궤도가 확정되면 고유번호를 주는데 발견자가 원하면 이름을 붙일 수 있다.
            </p>
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button text-[10px] lg:text-[13px] lg:mt-2">READ MORE</button>
        </div>
         </div>
         <div className="flex gap-6 lg:gap-20 pb-8 lg:pb-14 justify-center">
        <div className="w-6/12">
            <h1 className="text-[10pt] lg:text-[18px] xl:text-[20px] text-[#e3e3e3ee] font-['pretendard-medium']">밤하늘의 별똥별, 유성</h1>
            <h4 className="slide-title-english lg:text-[18px] xl:text-[20px] ">Meteor</h4>
            <p className="slide-text lg:text-[13px] lg:leading-[28px]">유성이란 흔히 말하는 별똥별을 뜻한다. 이 유성은 혜성, 소행성에서 떨어져 나온 티끌, 
            또는 태양계를 떠돌던 먼지 등이 지구 중력에 이끌려 대기 안으로 들어오면서 대기와의 마찰로 불타는 현상을 말한다. 
            하루 동안 지구 전체에 떨어지는 유성 가운데 맨눈으로 볼 수 있는 것은 수없이 많으며, 유성이 빛을 발하는 시간은 1/수십 초에서 수 초 사이이다.
            </p>
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button text-[10px] lg:text-[13px] lg:mt-2">READ MORE</button>
        </div>
        <div className="w-6/12">
        <img src="./img/image_5.jpg" className="w-[100%] h-[100%] lg:h-[300px] object-cover"/>
        </div>
         </div>
       </div>
       {/* "더 많은 별과 우주를 꿈꾸고 탐구해보세요" */}
       <div className="bg-[#1E202A] w-full">
        <div className="text-center pt-6 pb-6 lg:pt-10 lg:pb-10">
            <h4 className="lg:text-[20px] xl:text-[23px] headtitle">더 많은 별과 우주를 꿈꾸고 탐구해보세요.</h4>
            <p className="lg:text-[11px] xl:text-[13px] lg:leading-[24px] xl:leading-[30px] text mt-1">
            천문우주지식 서비스는 고대부터 현대까지의 천문 관측자료, 학습자료를 제공합니다.
            </p>
        </div>
       </div>

       <div className="bg-4">
        <div className="w-[100%] h-[100%] lg:h-[100%] opacity-50 absolute bg-black"></div>
          <div className="flex pt-12 relative justify-center gap-2 lg:pl-10 lg:pr-10">
           <div className="w-4/12 text-center">
            <div><img src="./img/icon_2.svg" className="w-16 ml-auto mr-auto mb-3"/></div>
            <h1 className="icon-headtitle lg:text-[20px]">생활천문관</h1>
            <h4 className="slide-title-english lg:text-[20px] ">Living Astronomical Museum</h4>
            <p className="slide-text leading-[17px] lg:text-[13px] lg:leading-[28px] pl-5 pr-5 xl:pl-20 xl:pr-20">일상 생활 속에서 일어나는 해와 달의 출몰시각,음양력, 태양 고도 등의 천문현상에 대해 살펴볼 수 있습니다.</p>
           </div>

           <div className="w-4/12 text-center">
            <div><img src="./img/icon_3.svg" className="w-16 ml-auto mr-auto mb-3"/></div>
            <h1 className="icon-headtitle lg:text-[20px]">천문학습관</h1>
            <h4 className="slide-title-english lg:text-[20px] ">Astronomical Learning Center</h4>
            <p className="slide-text leading-[17px] lg:text-[13px] lg:leading-[28px] pl-5 pr-5 xl:pl-20 xl:pr-20">태양계, 일식, 월식, 천체, 우주론, 별자리, 망원경, 국내천문대, 천문학자 등의 천문지식을 살펴볼 수 있습니다.</p>
           </div>

           <div className="w-4/12 text-center">
            <div><img src="./img/icon_1.svg" className="w-16 ml-auto mr-auto mb-3"/></div>
            <h1 className="icon-headtitle lg:text-[20px]">천문기록관</h1>
            <h4 className="slide-title-english lg:text-[20px] ">Astronomical Archives</h4>
            <p className="slide-text leading-[17px] lg:text-[13px] lg:leading-[28px] pl-5 pr-5 xl:pl-20 xl:pr-20">역사 속의 천문현상기록, 선조 40년부터 지금까지의 역서를 살펴볼 수 있습니다.</p>
           </div>
          </div>
          {/* 버튼 */}
          <div className="flex pt-2 pb-16 relative lg:pl-10 lg:pr-10 lg:pb-40">
           <div className="w-4/12 text-center justify-center">
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button text-[10px] lg:text-[13px] lg:mt-2">MORE INFO</button>
           </div>
           <div className="w-4/12 text-center justify-center">
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button text-[10px] lg:text-[13px] lg:mt-2">MORE INFO</button>
           </div>
           <div className="w-4/12 text-center justify-center">
            <button className="hover:bg-[#2D538D] transform active:scale-75 transition-transform shadow-inner shadow-[#DEDEDE] slide-button text-[10px] lg:text-[13px] lg:mt-2">MORE INFO</button>
           </div>
          </div>
       </div>

   </div>
  </div>
  
  );
}
function Maintext(){
  return (
    <div className="maintext w-full lg:bg-[#141414] lg:p-14 xl:p-16 flex flex-col lg:flex-row lg:gap-10 xl:gap-16 justify-center 
                         mt-[120px] lg:mt-[50px] sticky bottom-0">
          <div className="w-12/12 lg:w-6/12 opacity-40 lg:opacity-100 bg-red-500 ">
              <img src="./img/image_1.jpg" className="w-[100%] lg:h-[100%] h-[200px] object-cover"/>
          </div>
          <div className="w-12/12 lg:w-6/12 p-12 pt-8 lg:p-0 text-center lg:text-left">
              <h4 className="lg:text-[20px] xl:text-[23px] headtitle">태양계의 탄생과 진화</h4>
              <h1 className="lg:text-[18px] xl:text-[20px] lg:mb-5 headtitle-english">The Birth and Evolution of the Solar System</h1>
              <div className="flex gap-4 flex-row lg:flex-col lg:gap-3">
              <p className="w-6/12 lg:w-full lg:text-[11px] xl:text-[13px] lg:leading-[24px] xl:leading-[30px] text">태양계는 약 46억 년 전에 시작되었다고 추정된다. 그리고 태양계 
              형성에 관한 여러 가지 이론 중 그 대표적인 것이 성운설이다. 
              성운설은 우리 은하의 나선 팔에서 먼지와 가스로 이루어진 구름이 
              중력붕괴를 일으키고, 이 구름들은 수축을 계속한다. 수축이 진행되면서 
              회전 속도가 빨라져 구름들은 원반 형태를 갖추게 되는 것이다. 
              수축이 어느 상태에 도달하면 중심부의 온도와 밀도가 높아져서 핵융합 
              반응을 일으키게 된다. 그 수축된 질량의 대부분이 모여 태양을 형성하고, 
              남은 것은 편평한 원시 태양계 원반을 형성하여 여기서 행성, 위성, 소행성과 
              그 밖의 태양계 소천체 등이 생겼다.
              </p>
              <p className="w-6/12 lg:w-full lg:text-[11px] xl:text-[13px] lg:leading-[24px] xl:leading-[30px] text">태양계는 초기의 모습에서 점점 진화해왔다. 
              가스나 우주먼지가 행성의 중력에 붙잡혀 위성이 탄생했으며, 천체끼리의 충돌도 
              계속되어 태양계 진화의 원동력이 되고 있다.앞으로 태양은 적색거성의 단계를 거쳐 바깥층은 떨어져나가 행성상 
              성운이 되고, 중심부는 수축하여 백색왜성이 되리라 예상된다. 
              백색왜성이 된 태양은 행성들을 잡아 둘 수 있는 힘을 잃게 되어 태양계에는 
              태양 홀로 외로이 남아있게 될 것이다.
              </p>
            </div>
          </div>
          </div>
  )
} 

function Searchbox(props){
  return (
    <div className="search-box absolute w-full">
          <div>
            <div className="bg-slate-600 opacity-40 absolute w-full h-full"></div>
            <div className="relative pt-6 pb-6">
              <div className="flex justify-center gap-6 items-center">
            <h1 className="font-['pretendard-semi-bold'] text-white">통합검색</h1>
            <div className="flex">
              <label>
              <input class="placeholder:italic placeholder:text-slate-400 block bg-white 
              w-[350px] border-4 border-slate-400 rounded-l-lg py-1.5 pl-3 pr-3 shadow-sm focus:outline-none 
              focus:border-sky-500 focus:ring-sky-500 focus:ring-1" placeholder="검색어를 입력해주세요" type="text" name="search"/>
                <span class="sr-only">Search</span>
              </label>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" className="w-11 h-11 bg-slate-400 p-3 rounded-r-lg">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </span>
            </div>
            <button onClick={()=>{props.setSearchbox(!props.searchbox)}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightgray" 
              class="w-7 h-7 hover:w-[25px] ease-out duration-150">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
              </div>
              <div className="flex justify-center gap-2 font-['pretendard-light'] text-white text-sm items-center mt-2">
              <p className="bg-slate-500 text-white pl-1.5 pr-1.5 rounded-md text-[10px]">인기검색어</p>
              <p className="border-r-2 w-5 text-left">달</p>
              <p className="border-r-2 w-8 text-left">금성</p>
              <p className="border-r-2 w-8 text-left">태양</p>
              <p className="border-r-2 w-8 text-left">수성</p>
              <p className="border-r-2 w-14 text-left">부분월식</p>
              </div>
            </div>
          </div>

    </div>
  )
}

export default App;
import React, {useState} from "react";

import './index.css'

function InfoWindow() {
  return (
    <div style={{
      // 지도에 적용될 infowindow 사이즈 설정
      width: "800px", 
      height: "870px",
      flexDirectionx: "column",
      verticalalign: "middle",
      marginright: "5px",
      fontFamily: "ONE-Mobile-POP"
    }}>
    
    
    {/* 좌측 라인 스타일(가게 이미지 들어갈 공간) */}
    <div className="img" style={{
        display: "flex",
        borderTop: "5px solid gray",
        borderLeft: "5px solid gray",
        margin: "0px"
      }}>
    <image src= 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20200218_117%2F1582009091525hfm52_JPEG%2Fimage.jpg' width='300' height='245'></image>
    <div class="shop">
      <div class="content" style={{
        width: "400px",
        fontSize: "17px",
        margin: "0px"
      }}>
        {/* 우측 라인 스타일(가게 상세 내용 공간) */}
          <h2>👨🏻‍🍳SHOP 소개👨🏻‍🍳</h2>
          {/* 상호명 */}
          <p className="shop-name">상호명 | 시스살롱</p>
          {/* 분류 컬럼 */}
          <p className="division" style={{
            color: "gray"
          }}>분류 | 디저트 / 카페</p>
          {/* 주소 */}
          <p className="shop-dwelling">도로명 | 광주 동구 백서로 219</p>
          <p style={{
            color: "navy",
            fontWeight: "lighter"
          }}> 지번 | 광주 동구 동명동 140-13 (우편번호)61466</p>
          {/* 전화번호 */}
          <p className="shop-phonNumber">전화번호 | 070-8800-2411</p>
          {/* SNS */}
          <p className="shop-sns">SNS | 
            <a href="http://instagram.com/sis_salon"> http://instagram.com/sis_salon</a>
          </p>
          {/* 영업시간 */}
          <p className="shop-business hours">영업시간 | 12:00  - 20:00</p>
          {/* 브레이크 타임 */}
          <p className="shop-break time">브레이크 타임 | 없음</p>
          {/* 영업 휴무일 */}
          <p className="shop-holiday" style={{
            color: "red"
          }}>영업 휴무일 | 매주 토,일 휴무</p>
          {/* 주차 가능 여부 */}
          <p className="ParkingAvailability">주차 가능 여부 | X</p>
          {/* 주차 가능 대수 */}
          <p className="ParkingNumber">주차 가능 대수 | 없음</p>
    </div>
    </div>
          {/* 오른쪽 상단 배너에 가게 혼잡도 (컬러) 넣기 */}
        <div className="box2" style={{
          flexDirection: "columns",
          color: "black",
          borderRight: "5px solid gray"
        }}>
        
        {/* 창 닫기 버튼 생성 */}
        <div style={{
          textAlign: "right"
        }}>
        <button className="and" style={{
        marginBottom: "35px",
        fontSize: "20px"
        }}>✖️</button>
        </div>

            <h2 style={{
              color: "blue"
            }}>가게 혼잡도</h2>
            {/* 컬러(스타일) 클래스 */}
            <div className="table"></div>
            
            {/* 테이블 현황 */}
            <h2 style={{
              color: "blue",
              marginBottom: "5px"
            }}>Table 현황</h2>
            <h3>이용중/총 좌석</h3>
            <div style={{
              fontSize: "18px",
              fontWeight: "bold"
            }}>5/5</div>
        
        </div>
      </div>
    {/* 아래 컬럼 스타일(리뷰 목록,평점 관리) */}
    <div className="rivew">
      <div className="box1"><h2>💙방문자 리뷰💙</h2>
    
      <div style={{
        flexDirection: "row",
        fontSize: "15px",
        
      }}>
      <p className="list-1">🙂"음식이 맛있어요"</p>
      <p className="list-2">🖼"인테리어가 멋져요"</p>
      <p className="list-1">🍽"혼밥하기 좋아요"</p>
      <p className="list-3">💳"가성비가 좋아요"</p>
      <p className="list-2">🌱"매장이 청결해요"</p>
      <p className="list-1">🏩"매장이 넓어요"</p>
      <p className="list-1">🚗"주차하기 편해요"</p>
      <p className="list-3">💐"특별한 날 가기 좋아요"</p>
      <p className="list-2">📷"사진이 잘 나와요"</p>
      <p className="list-2">👍🏻"친절해요"</p>
      </div>
      </div>

      {/* 가게 만족도 리스트(별점)*/}
      <div className="box2" style={{
        borderTop: "5px solid gray",
        borderRight: "5px solid gray",
        borderBottom: "5px solid gray"
      }}><h2>💙가게 만족도💙</h2>
      

      {/* 별점 리스트 생성하기(맛, 접근성, 분위기, 가격, 청결도) */}
    <div style={{
      fontSize: "15px",
      
    }}>
    <p className="box-title">맛</p>
    <p className="box-star" id="star-4">⭐️⭐️⭐️⭐️</p>
    <p className="box-title">가격</p>
    <p className="box-star" id="star-2">⭐️⭐️</p>
    <p className="box-title">청결도</p>
    <p className="box-star" id="star-3">⭐️⭐️⭐️</p>
    <p className="box-title">접근성</p>
    <p className="box-star" id="star-1">⭐️</p>
    <p className="box-title">분위기</p>
    <p className="box-star" id="star-5">⭐️⭐️⭐️⭐️⭐️</p>
    </div>  
    
    
    {/* 관리자가 설정할 수 있는 이미지(최대 세개 가능) */}
    <image src='https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2F20160808_276%2Flmj9091_1470585867671NB3Qb_JPEG%2F16-08-08-00-53-29-643_deco.jpg'width='130px'height='220px'></image>  
    <image src='https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MTlfMTM3%2FMDAxNTI5MzM1OTQ0OTQx.jjHQVmQkZIGztSVZVe0_GxcKJ_av3SyzEDPkCIelWTog.HfhkLd-YNGbG_wErwUJ8EwVA-Bmbbu70Totdp3BcoSUg.JPEG.euglena1106%2F20180616_131534.jpg'width='130px'height='220px'></image>  
    <image src='https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA2MTlfNzUg%2FMDAxNTI5MzM1OTQ1MjM3.U9wiaWIvVcJ-EgHJPQwxIOkAo_ByKA3b7-SD-Qm0LMgg.olhqT0ueZY51utCTm1KufFQ912sD4O1hrkUSYM29PlYg.JPEG.euglena1106%2F20180616_131523.jpg'width='130px'height='220px'></image>
    </div>  
      </div>
      

    {/* 버튼 4개 생성 (리뷰작성, 주차장찾기, 길찾기(차량), 길찾기(도보)) */}
  <div id="button">
    <div id="footer" style={{
      textAlign: "center",
      background: "whitesmoke",
      borderBottom: "5px solid gray",
      borderRight: "5px solid gray",
      borderLeft: "5px solid gray"
    }}>
    <button class="button_2" style={{
      background: "pink",
      color: "black"
    }}>리뷰작성</button>
    <button class="button_2">주차장찾기</button>
    <button class="button_2">차량길찾기</button>
    <button class="button_2">도보길찾기</button>
  

    </div>
  </div>










    </div>
    
   


  );
}

export default InfoWindow;

import React, { useState } from "react";
import { ReviewLeftBack,ReviewLeftTitle,FlexDirection,
    List_1,List_2,List_3} from './Style';



function ReviewLeft(){
    let [review, setReview] = useState([
    '🙂"음식이 맛있어요"','🖼"인테리어가 멋져요"',
    '🍽"혼밥하기 좋아요"','💳"가성비가 좋아요"',
    '🌱"매장이 청결해요"','🏩"매장이 넓어요"',
    '🚗"주차하기 편해요"','💐"특별한 날 가기 좋아요"',
    '📷"사진이 잘 나와요"','👍🏻"친절해요"']);

    let [number,setNumber] = useState(0);
    
    return(
        <div className="rivew">
        <div className="box1">
            <h2>💙방문자 리뷰💙</h2>
      
        <div style={{
          flexDirection: "row",
          fontSize: "15px",
          
        }}>
            {
                review.map((item, index) => {
                    return (
                        <p name={index} className={`list-${index % 3 + 1}`}>
                            {item}
                        </p>
                    )
                })
            }
        <list_3>{rivew[0]}</list_3>
        <list_2>{rivew[1]}</list_2>
        <list_1>{rivew[2]}</list_1>
        <list_3>{rivew[3]}</list_3>
        <list_2>{rivew[4]}</list_2>
        <list_1>{rivew[5]}</list_1>
        <list_1>{rivew[6]}</list_1>
        <list_3>{rivew[7]}</list_3>
        <list_2>{rivew[8]}</list_2>
        <list_2>{rivew[9]}</list_2>
        </div>
        </div>
        </div>
    );
}

export default ReviewLeft;
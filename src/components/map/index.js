import React, { useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import ReactDOMServer from "react-dom/server";
import { getIconHTML } from "../../utils/getIconHTML";
import InfoWindow from "./infoWindow";

function Map() {
  const mapRef = useRef(null);
  const { Tmapv2 } = window;

  const html = getIconHTML(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
    "가게이름",
    "기타정보"
  );

  const initTMap = useCallback(() => {
    // 먼저 지도를 생성 후 중심좌표 설정 >> ui 깨짐을 방지하기 위함
    mapRef.current = new Tmapv2.Map("TMap", {
      // 지도의 폭
      width: "80%",
      // 지도의 높이
      height: "100%",
      // 지도의 범위
      zoom: 14,
    });

    navigator.geolocation.getCurrentPosition((position) => {
      let loc = new Tmapv2.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      mapRef.current.setCenter(loc);
      /*
            const i = new Tmapv2.Marker({
              position: loc,
              iconHTML: html,
              map: mapRef.current,
            });
             */
      const info = new Tmapv2.InfoWindow({
        position: loc,
        content: ReactDOMServer.renderToString(<InfoWindow />),
        type: 2,
        border: "0px solid #FF0000",
        map: mapRef.current,
      });
    });
  }, [Tmapv2]);

  useEffect(() => {
    initTMap();
    console.log(ReactDOMServer.renderToString(<InfoWindow />));
  }, [initTMap]);

  return <div id="TMap" />;
}

export default Map;

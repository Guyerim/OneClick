import React, { useCallback, useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef(null);
  const { Tmapv2 } = window;

  const initTMap = useCallback(() => {
    // 먼저 지도를 생성 후 중심좌표 설정 >> ui 깨짐을 방지하기 위함
    mapRef.current = new Tmapv2.Map("TMap", {
      // 지도의 폭
      width: "100%",
      // 지도의 높이
      height: "100%",
      // 지도의 범위
      zoom: 14,
    });
    navigator.geolocation.getCurrentPosition((position) => {
      mapRef.current.setCenter(
        new Tmapv2.LatLng(position.coords.latitude, position.coords.longitude)
      );
    });
  }, [Tmapv2]);

  useEffect(() => {
    initTMap();
  }, [initTMap]);

  return <div id="TMap" />;
}

export default Map;

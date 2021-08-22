import React, { useEffect, Component } from "react";
import style from "../styles/restpages/Main.module.scss";
import mapstyle2 from "../components/mapstyle2";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

export default function Hello2() {
  var Map = L.map("map", {
    center: [51.505, -0.09],
    zoom: 13,
  });
  return (
    <div id="map">
      <Map />
    </div>
  );
}

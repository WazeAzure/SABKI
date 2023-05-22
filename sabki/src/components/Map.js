import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { store } from "../Firebase/FirebaseConfig";
import { collection, onSnapshot } from "@firebase/firestore";

import prov from "../data/indonesia-province-simple.json";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import Layout from "./Layout";

function getColor(d) {
  return  d > 400 ? '#b10026' :
          d > 300 ? '#e31a1c' :
          d > 200 ? '#fc4e2a' :
          d > 100 ? '#fd8d3c' :
          d > 75 ? '#feb24c' :
          d > 50 ? '#fed976' :
          d >= 10 ? '#ffeda0'  :
          '#ffffcc' ;
}

function style(feature) {
  return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
  };
}

function PetaIndo  ()  {
    const [highlightedFeature, setHighlightedFeature] = useState(null);
    const [mapInstance, setMapInstance] = useState(null);
    const [infoContent, setInfoContent] = useState('Provinsi');
    const [infoContentDensity, setInfoContentDensity] = useState(0);

    const provinceData = prov
    prov.features = prov.features.map((data, i) => {return {...data, properties: { ...data.properties, density: i*10}}})


    // style handling
    const highlightFeature = (e) => {
      var layer = e.target;

      layer.setStyle({
          weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.6,
      });
    
     setHighlightedFeature(layer);
     setInfoContent(`${layer.feature.properties.Propinsi}`)
     setInfoContentDensity(layer.feature.properties.density)
     if(mapInstance){
      mapInstance.fitBounds(layer.getBounds());
     }
    }

    const resetHighlight = (e) => {
      const layer = e.target

      layer.setStyle({
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
      });

      setHighlightedFeature(null);
      setInfoContent("Provinsi");
      setInfoContentDensity(0);
      if(mapInstance){
        mapInstance.fitBounds(provinceData.bbox);
       }

    }

    const zoomToFeature = (e) => {
      const map = mapInstance;
      const layer = e.target;
  
      if (map && layer) {
        map.fitBounds(layer.getBounds());
      }
    };

    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    }

    const MapController = () => {
      const map = useMap();
      useEffect(() => {
        setMapInstance(map);
      }, [map]);
  
      return null;
    };

    const CustomControl = () => {
      const map = useMap();
  
      return (
        <div className="info-control">
          <h4>Jumlah Anak Berkebutuhan Khusus</h4>
          <div className="info-content">{infoContent}: {infoContentDensity} anak</div>
        </div>
      );
    };

    const Legend = () => {
      const map = useMap();

      const grades = [0, 10, 50, 75, 10, 200, 300, 400]

      return (
        <div className="info legend">
          { grades.map((data, i) => (
            <>
              <i style= {{backgroundColor: getColor(grades[i]+1)}}></i> {grades[i] + (grades[i + 1] ? "-" + grades[i + 1] : '+')} <br /> 
            </>
          )) 
          }
        </div>
      )
    }
   

    return (
      <Layout>
        <h1>Peta Persebaran Karakteristik di Indonesia</h1>
        <MapContainer center={[-2.526, 115.54]} zoom={5} scrollWheelZoom={false}>
          <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapController />
          
          <GeoJSON data={provinceData} style={style} onEachFeature={onEachFeature}/>

          <CustomControl position="topright" />
          <Legend />
        </MapContainer>
      </Layout>
    );
  };

// function PetaIndo  ()  {
//   const provinceData = prov
//   prov.features = prov.features.map((data, i) => {return {...data, properties: { ...data.properties, density: i*10}}})
//   console.log(prov.features)
//   return (
//     <Layout>
//       <h1>Peta Persebaran Karakteristik di Indonesia</h1>
//       <MapContainer center={[-2.526, 113.54]} zoom={5}>
//         <TileLayer 
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <GeoJSON data={provinceData}/>
//       </MapContainer>
//     </Layout>
//   );
// };

export default PetaIndo;

// react-scripts: ^2.1.3
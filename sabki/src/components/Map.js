import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import { store } from "../Firebase/FirebaseConfig";
import { collection, onSnapshot } from "@firebase/firestore";

import prov from "../data/indonesia-province.json";

function PetaIndo  ()  {
    const provinceData = prov;
    return (
      <MapContainer>
      </MapContainer>
    );
  };

export default PetaIndo;
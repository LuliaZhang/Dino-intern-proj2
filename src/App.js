import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";


import "./App.css";
import activityData from './data/activity_data.json';
import CustomMarker from "./components/customMarker";
import customMapStyle from './map_style.json'

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });


  const center = useMemo(() => ({ lat: 39.9043, lng: 116.4074}), []);

  const data = activityData;
  const locationDict = {};
  for(let i = 0; i < data.length; i++){
    const key = `${data[i].activity_latitude},${data[i].activity_longitude}`;
    if(!locationDict[key]){
      locationDict[key] = [data[i]];
    }else{
      locationDict[key].push(data[i]);
    }
  }
  console.log(locationDict)

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={12}
          options={{styles: customMapStyle}}
        >

          <div className="markers">
          {
            Object.entries(locationDict).map(([key, value]) => (
              <CustomMarker key={key} data={value}/>
            ))
          }
          </div>
          
        </GoogleMap>
      )}
    </div>
  );
};

export default App;
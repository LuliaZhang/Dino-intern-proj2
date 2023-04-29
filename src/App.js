import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";
import activityData from './data/activity_data.json';
import CustomMarker from "./components/customMarker";
import customMapStyle from './map_style.json';
import "./App.css";

// this is the main view of the app
const App = () => {
  // load the map with api key
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });


  // set the initial display center of the map
  const center = useMemo(() => ({ lat: 39.9043, lng: 116.4074}), []);

  /* group the events into a dictionary based on the location
     the key of the dictionary is the combination of latitude and longtitude (rounded to three decimal places)
     the value is an array of events 
  */
  const data = activityData;
  const locationDict = {};
  for(let i = 0; i < data.length; i++){
    const key = `${data[i].activity_latitude.toFixed(3)},${data[i].activity_longitude.toFixed(3)}`;
    if(!locationDict[key]){
      locationDict[key] = [data[i]];
    }else{
      locationDict[key].push(data[i]);
    }
  }

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
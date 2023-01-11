import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import {type Data} from '../pages/dashboard'

export default function GoogleMap({hikeData}){

    const [coordinates, setCoordinates] = useState({ lat: 59.95, lng: 30.33 });
    const [selectedCategory, setSelectedCategory] = useState('all');

    
    const defaultProps = {
        center: {
          lat: 0,
          lng: 0
        },
        zoom: 5,
      };

      if(hikeData){
        console.log(hikeData[0].lat);
        defaultProps.center.lat = hikeData[0].lat
        defaultProps.center.lng = hikeData[0].lng
      }
      
      const MapMarker = ({ lat, lng, text }) => <img className='pin' src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Google_Maps_pin.svg'/>;
      
  return (
    <>
    {hikeData &&
    <div className='googMap'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDbpdCeI3KAZTAnsn6GccXRuLX8DrpoYrY" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
     {hikeData?.map((hike) => {
      if(hike.category === selectedCategory || selectedCategory === 'all') 
       return( <MapMarker
        key={hike.id}
        lat={hike.lat}
        lng={hike.lng}
        text={hike.name}
        />)
     }
      )}
            
        <MapMarker
            key={1}
            lat={34.0522}
            lng={-118.2437}
            text="My Marker"
        />

      </GoogleMapReact>
    </div>

}
    </>

  )
}

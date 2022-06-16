import "./style.css";
import React, { useEffect } from 'react';
import { GetLocationData } from '../../actions/Actions'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import {Icon} from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"

interface LocationProps {
  
    Location: {
      LocationType: {
          latitude: number;
        longitude: number;
        locationName: string;
    
        }
    }
    
}
export type Props = LocationProps;

const center = {
  lat: 52.824270,
  lng: 13.791780
};

const Map = ({Location, ...props}:Props) =>{
  
  useEffect(() => {
    GetLocationData();
    //console.log(Location, 'PROPS')
  }, [GetLocationData]);

  

  return (
    <>     
      {/* {console.log('HEREEE', Location)} */}
      
        <>
          
          <MapContainer center={[52.837133, 13.787587]} zoom={13} scrollWheelZoom={true} style={{ height: '50vh', width: '50wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
          <Marker position={[Number(Location.LocationType ? Location.LocationType.latitude : 52.824270), Number(Location.LocationType ? Location.LocationType.longitude : 13.791780)]}
            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
            <Tooltip direction="right" offset={[0, 0]} opacity={1} permanent>{Location.LocationType ? Location.LocationType.locationName : 'Buche-Alt'}</Tooltip>
      <Popup>
        {Location.LocationType ? Location.LocationType.locationName : 'Buche-Alt'} <br /> Microclimate Weather Station
      </Popup>
    </Marker>
          </MapContainer>,
          

         
        </>
    
    </>
  );
}



/* const mapStateToProps = (state: any) => ({
    
    Location: state.Location,
    ...state,
   
}) */
export default Map
//export default connect(mapStateToProps, {GetLocationData })(Map);
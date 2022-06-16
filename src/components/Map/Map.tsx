import "./style.css";
import React, { useEffect } from 'react';
import { GetLocationData } from '../../actions/Actions'
import { GoogleMapsAPI } from "../../key/keys";
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

  //const mapRef = React.useRef<any>(null);
  
  /* const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GoogleMapsAPI
  });
  const onLoad = React.useCallback(
    (mapInstance) => {
      const bounds = new google.maps.LatLngBounds();      
        bounds.extend(
          new google.maps.LatLng(
            Number(Location.LocationType ? Location.LocationType.latitude : 52.824270),
            Number(Location.LocationType ? Location.LocationType.longitude : 13.791780 )
            
          )
        );
      
      mapRef.current = mapInstance;
      mapInstance.fitBounds(bounds);
    },
    [Location]
  ); */
  /* const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  }; */

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
          

          {/* <GoogleMap
            mapContainerClassName="c-office-overview__map"
           center={center}
            zoom={12}
            onLoad={onLoad}    
          >
            <Marker
                key={Location.LocationType ? Location.LocationType.latitude : 52.824270}
                //onClick={() => onClickMarker(office.id)}
                position={{
                  lat: Number(Location.LocationType ? Location.LocationType.latitude : 52.824270 ),
                  lng: Number(Location.LocationType ? Location.LocationType.longitude : 13.791780)
              }}
              label={Location.LocationType ? `${Location.LocationType.locationName} ` : ' '}
              
              />
            <InfoWindow
                position={{
                  lat: Number(Location.LocationType ? Location.LocationType.latitude : 52.824270 ),
                  lng: Number(Location.LocationType ? Location.LocationType.longitude : 13.791780)
                }} 
              >
                <p>
                  {Location.LocationType ? Location.LocationType.locationName : ' '}
                  
                </p>
              </InfoWindow>
           
          </GoogleMap> */}
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
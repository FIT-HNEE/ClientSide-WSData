import "./style.css";
import React, { useEffect } from 'react';import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow
} from "@react-google-maps/api";
import { GetLocationData } from '../../actions/Actions'
import { GoogleMapsAPI } from "../../key/keys";


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

  const mapRef = React.useRef<any>(null);
  
  const { isLoaded } = useJsApiLoader({
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
  );
  /* const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  }; */
  return (
    <>     
      {/* {console.log('HEREEE', Location)} */}
      {isLoaded && (
        <>
          <GoogleMap
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
           
          </GoogleMap>
        </>
      )}
    </>
  );
}



/* const mapStateToProps = (state: any) => ({
    
    Location: state.Location,
    ...state,
   
}) */
export default Map
//export default connect(mapStateToProps, {GetLocationData })(Map);
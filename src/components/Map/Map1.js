import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ LocationType, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Micro Climatic Weather Station</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCok5l_Sfix6QbdAYSTV-5QunBuoR23W08' }}
        defaultCenter={LocationType}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={toString(LocationType.latitude)}
          lng={toString(LocationType.longitude)}
          text={LocationType.locationName}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map
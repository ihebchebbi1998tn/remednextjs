'use client'

import 'mapbox-gl/dist/mapbox-gl.css'
import { useState } from 'react'

import { Map, Marker, Popup } from 'react-map-gl'

export interface ContactMapProps {
  latitude?: number
  longitude?: number
  zoom?: number
}

export function ContactMap({
  latitude = 36.7534865,
  longitude = 10.2780854,
  zoom = 14,
}: ContactMapProps) {
  const [showPopup, setShowPopup] = useState<boolean>(true)

  return (
    <Map
      initialViewState={{
        latitude,
        longitude,
        zoom,
      }}
      style={{ minWidth: 400, height: 480 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={
        'pk.eyJ1IjoiYXJmYSIsImEiOiJjbHJpNXZtc2QwMHA4MnZxcW5sdnRuejF2In0.XlSrHkTKsLdulThl9CHFjQ'
      }
    >
      <Marker
        latitude={latitude}
        longitude={longitude}
        onClick={() => setShowPopup((showPopup) => !showPopup)}
        color="hsl(var(--reg-main))"
      />
      {showPopup && (
        <Popup
          latitude={latitude}
          longitude={longitude}
          closeButton={false}
          closeOnClick={false}
          onClose={() => setShowPopup(false)}
          anchor="top"
        >
          <div className="text-black">
            <h3 className="text-sm font-semibold">
              Respect Environnement Group
            </h3>
            <p className="text-xs">Rue de la République, Sfax, Tunisie</p>
          </div>
        </Popup>
      )}
    </Map>
  )
}

export default ContactMap

'use client'

import 'mapbox-gl/dist/mapbox-gl.css'

import { Map, Marker, Popup } from 'react-map-gl'

const LOCATIONS = [
  {
    latitude: 36.7534865,
    longitude: 10.2780854,
  },
  {
    latitude: 36.8574293,
    longitude: 10.1548072,
  },
]

interface ContactMapProps {
  mapboxAccessToken: string
}

export function ContactMap({ mapboxAccessToken }: ContactMapProps) {
  return (
    <Map
      initialViewState={{
        latitude: LOCATIONS[0].latitude,
        longitude: LOCATIONS[0].longitude,
        zoom: 10,
      }}
      style={{ minWidth: 300, height: 480 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={mapboxAccessToken}
      scrollZoom={false}
    >
      <Marker
        latitude={LOCATIONS[0].latitude}
        longitude={LOCATIONS[0].longitude}
        color="hsl(var(--reg-main))"
      />
      <Marker
        latitude={LOCATIONS[1].latitude}
        longitude={LOCATIONS[1].longitude}
        color="hsl(var(--reg-main))"
      />
      <Popup
        latitude={LOCATIONS[0].latitude}
        longitude={LOCATIONS[0].longitude}
        closeButton={false}
        closeOnClick={false}
        anchor="top"
      >
        <div className="text-black">
          <h3 className="text-sm font-semibold">Respect Environnement Group</h3>
          <p className="text-xs">
            Ezzahra Beach, Afh Subdivision
            <br />
            Ben Arous Ezzahra, Tunisia
          </p>
        </div>
      </Popup>
      <Popup
        latitude={LOCATIONS[1].latitude}
        longitude={LOCATIONS[1].longitude}
        closeButton={false}
        closeOnClick={false}
        anchor="top"
      >
        <div className="text-black">
          <h3 className="text-sm font-semibold">
            Respect environnement group Tunis
          </h3>
          <p className="text-xs">
            1st floor, Block A, Essalem Residence
            <br />
            Ariana 2037, Tunisia
          </p>
        </div>
      </Popup>
    </Map>
  )
}

export default ContactMap

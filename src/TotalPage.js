import React, { useState } from 'react';
import './App.css';
import WindyMap from './WindyMap';
import FormAddBoat from './FormAddBoat';
import { withRouter } from 'react-router-dom'; // Import withRouterimport { withRouter } from 'react-router-dom'; 
function TotalPage() {
  const [markers, setMarkers] = useState([
    {
      id: 1,
      position: [16.085, 108.25],
      shipNum: 'Dng 834934VN',
      shipName: 'Already One',
      power: '220CV',
      shipLength: 15,
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      position: [16.05, 108.27],
      shipNum: 'Qng 834934VN',
      shipName: 'Already Two',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://images.unsplash.com/photo-1655107614517-dc106f8cf1a5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      position: [16.03, 109.3],
      shipNum: 'Qng 834934VN',
      shipName: 'Already Two',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      position: [13.03, 111.3],
      shipNum: 'Qng 2334934VN',
      shipName: 'Already Two',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      position: [8.1789, 105.0139],
      shipNum: 'Qng 834934VN',
      shipName: 'Already Two',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 6,
      position: [16.03, 108.5],
      shipNum: 'Qng 834934VN',
      shipName: 'Already Two',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
  ]);
  const ship = [
    {
      id: 1,
      shipNum: 'Qng 834956VN',
      shipName: 'Navy Star',
      shipLength: 15,
      power: '320CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663050763676-82ff02c5e02c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 2,
      shipNum: 'Nng 834934VN',
      shipLength: 17,
      shipName: 'Hard Waves',
      power: '220CV',
      ownerPhone: '0952393934',
      img: 'https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      shipNum: 'Vng 834934VE',
      shipLength: 17,
      shipName: 'SkyTea',
      power: '560CV',
      ownerPhone: '0952393934',
      img: 'https://images.unsplash.com/photo-1589420241438-38271f7d3cea?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 4,
      shipNum: 'Hng 434434VE',
      shipLength: 17,
      shipName: 'Syea',
      power: '560CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663011524822-e32fc07f7105?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 5,
      shipNum: 'Hng 534434VE',
      shipLength: 17,
      shipName: 'Js Syea',
      power: '560CV',
      ownerPhone: '0952393934',
      img: 'https://plus.unsplash.com/premium_photo-1663040158145-54aaca9c0d3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];
  return (
    <div className='mapContainer'>
      <div className="leafletMap">
        {/* Pass center and zoom props to WindyMap */}
        <WindyMap markers={markers} />
        {/* Wrap FormAddBoat with withRouter */}
        <FormAddBoat markers={markers} ship={ship} setMarkers={setMarkers} />
      </div>
    </div>
  );
}
export default TotalPage;
import React, { useState } from 'react';
import { AutoComplete, Input } from 'antd';

function FormAddBoat({ markers, ship, setMarkers }) {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [newMarker, setNewMarker] = useState({
    position: '',
    shipNum: '',
  });

  const options = ship.map(item => ({ value: item.shipNum }));

  const handlePositionChange = e => {
    const { value } = e.target;
    // Remove non-numeric characters except commas and periods
    const cleanedValue = value.replace(/[^0-9.,-]/g, '');
    setNewMarker(prevState => ({
      ...prevState,
      position: cleanedValue,
    }));
  };

  const handleShipNumChange = value => {
    setNewMarker(prevState => ({
      ...prevState,
      shipNum: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Clear the form fields
    setNewMarker({ position: '', shipNum: '' });

    // Split and map the cleaned position value to numbers
    const enteredPosition = newMarker.position.split(',').map(Number);

    // Find the ship with the entered ship number
    const foundShip = ship.find(ship => ship.shipNum === newMarker.shipNum);

    if (foundShip) {

      // If ship is found, add it as a new marker
      const newMarkerWithShip = {
        id: markers.length + 1,
        position: enteredPosition,
        shipLength: foundShip.shipLength,
        power: foundShip.power,
        ownerPhone: foundShip.ownerPhone,
        img: foundShip.img,
        shipNum: newMarker.shipNum,
        shipName: foundShip.shipName,
      };
      setMarkers(prevMarkers => [...prevMarkers, newMarkerWithShip]);
    } else {
      // If ship is not found, handle it accordingly (e.g., show an error message)
      console.log('Ship not found!');
    }
  };

  const toggleForm = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <div>
      {isFormVisible && (
        <div className="formAddBoat">
          <form onSubmit={handleSubmit} className="formtotal">
            <h2>Add Ship Location</h2>
            <label className="formfield">
              Position
              <Input
                style={{ width: '170px' }}
                type="text"
                name="position"
                value={newMarker.position}
                onChange={handlePositionChange}
              />
            </label>

            <label className="formfield">
              ShipNum
              <AutoComplete
                style={{ width: '170px' }}
                popupClassName="suggest"
                options={options}
                filterOption={(inputValue, option) =>
                  option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                }
                onChange={handleShipNumChange}
              />
            </label>

            <button className="addboatbutton" type="submit">
              Add Location
            </button>
          </form>
        </div>
      )}
      <button className="toggleFormButton toggle" onClick={toggleForm}>
        {isFormVisible ? 'Hide Form' : 'Add Location'}
      </button>
    </div>
  );
}

export default FormAddBoat;

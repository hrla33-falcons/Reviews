import React from 'react';
import foo from '../../../foo.config';
import zipcodes from 'zipcodes';

const Map = ({ zip }) => {
  //console.log(zip)
  let addressObj = zipcodes.lookup(zip);

  var map_title = {
    fontWeight: '700',
    color: '#292929',
    fontSize: '24px',
    overflowWrap: 'break-word',
    textSizeAdjust: '100%',
    wordBreak: 'break-word',
    fontFamily: 'Lato'
  }

  console.log('this is address obj: ' + addressObj)
  return (
    <div>
      <h2>
        <strong>
          <span style={map_title}>
            {`Map`}
          </span>
        </strong>
      </h2>
      <iframe
        width={'100%'}
        height={'100%'}
        frameBorder={0} style={{border: 0, zindex: -1, border: 'none'}}
        src={`https://www.google.com/maps/embed/v1/place?key=${foo.map}
          &q=${addressObj.city}+${addressObj.country}`} allowFullScreen>
      </iframe>
    </div>
  );
};

export default Map;
import React from 'react';

function Map() {
  return (
    <div>
      <iframe
        title="location"
        src="https://maps.google.com/maps?q=Baghdad&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="650px"
        height="300"

        allowFullScreen
      />
    </div>
  );
}

export default Map;
import React from 'react';

class LocationFinder extends React.Component {
  state = {
    latitude: null,
    longitude: null,
    error: null,
  };

  geoFindMe = () => {
    if (!navigator.geolocation) {
      this.setState({ error: 'Geolocation is not supported by your browser' });
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.setState({ latitude, longitude });
          this.props.onLocationDetected({ latitude, longitude });
        },
        () => {
          this.setState({ error: 'Unable to retrieve your location' });
        }
      );
    }
  };

  render() {
    return (
      <button onClick={this.geoFindMe}>Detect my location</button>
    );
  }
}

export default LocationFinder;

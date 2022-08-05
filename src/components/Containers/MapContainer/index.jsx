import React, { Component } from 'react';
import LazyIframe from '../../LazyIframe/LazyIframe';


class MapContainer extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33,
        },
        zoom: 11,
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100%', width: '100%' }}>
                <LazyIframe
                    title="United States"
                    url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25901456.193831448!2d-101.3593331375!3d37.58335399628364!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1656243396699!5m2!1sen!2sin"
                />
            </div>
        );
    }
}

export default MapContainer;

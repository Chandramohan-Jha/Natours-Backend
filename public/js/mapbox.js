console.log('Hello from the client side');

export const displayMap = (locations) => {
  mapboxgl.accessToken = '<ENTER YOUR MAPBOX API HERE>';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/chandramohan036/clfghbace008j01o4npeihu2n',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // add popup
    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // extends map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 200,
      right: 200,
    },
  });
};

// Chandramohan - Jha / Natours - Backend;

var map = new maptalks.Map('map', {
  center: [-0.113049,51.498568],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});

var layer = new maptalks.VectorLayer('vector')
    .addTo(map);

map.on('mousemove', function (e) {
  if (!layer.getMask()) {
    layer.setMask(new maptalks.Marker(e.coordinate, {
      'symbol': {
        'markerType': 'square',
        'markerWidth': 200,
        'markerHeight': 200
      }
    }));
  } else {
    layer.getMask().setCoordinates(e.coordinate);
  }
});

//<<<<<<<< prepare data
var extent = map.getExtent(),
  min = extent.getMin(),
  w = extent.getWidth(),
  h = extent.getHeight(),
  markers = [];
for (var i = 0; i < 100; i++) {
  markers.push(new maptalks.Marker([min.x + Math.random() * w, min.y + Math.random() * h]));
}
layer.addGeometry(markers);
//>>>>>>>>

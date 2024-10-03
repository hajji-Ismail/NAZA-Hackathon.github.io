<script>
  // Define different data layers
  var seaLevelLayer = L.geoJSON(seaLevelGeoJSON);
  var populationLayer = L.geoJSON(populationGeoJSON);
  var infrastructureLayer = L.geoJSON(infrastructureGeoJSON);

  // Add layer control
  var overlayMaps = {
    "Sea Level Rise": seaLevelLayer,
    "Population at Risk": populationLayer,
    "Critical Infrastructure": infrastructureLayer
  };

  L.control.layers(null, overlayMaps).addTo(map);

  // Optionally, add layers to map by default
  seaLevelLayer.addTo(map);
</script>


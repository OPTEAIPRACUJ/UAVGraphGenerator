import MapManager from "./classes/map-manager";

const mapManager = new MapManager();

document.getElementById("generateBtn").addEventListener("click", function () {
  mapManager.generateGraph();
});

document.getElementById("clearBtn").addEventListener("click", function () {
  mapManager.clearMarkers();
});

document.getElementById("clearLineBtn").addEventListener("click", function () {
  mapManager.clearConnections();
});

document.getElementById("saveBtn").addEventListener("click", function () {
  mapManager.saveGraph();
});

document
  .getElementById("fileInput")
  .addEventListener("change", function (event) {
    mapManager.loadGraph(event);
  });

window.onload = () => mapManager.initMap();

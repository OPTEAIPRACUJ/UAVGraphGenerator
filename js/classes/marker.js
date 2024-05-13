// klasa marker, która przechowuje informacje o punkcie
export default class Marker {
  constructor(name, lat, lng, marker) {
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.marker = marker;
  }
}

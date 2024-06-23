// klasa marker, która przechowuje informacje o punkcie
export default class Marker {
  constructor(id, name, lat, lng, marker) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.marker = marker;
  }
}

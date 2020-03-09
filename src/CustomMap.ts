// creating the custom map function that doesn't expose too many methods to people
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(lat: number, lng: number, rootElement?: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(rootElement || "#map"),
      {
        backgroundColor: "#7DD9B3",
        center: { lat, lng },
        zoom: 2
      }
    );
  }
  addMarker(...markers: {}[]) {
    markers.forEach(
      (mark: { location: { lat: number; lng: number }; name: string }) =>
        new google.maps.Marker({
          position: {
            lat: mark.location.lat,
            lng: mark.location.lng
          },
          label: mark.name,
          map: this.googleMap
        })
    );
    console.log("bam!");
  }
}

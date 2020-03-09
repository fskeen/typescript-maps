// creating the custom map function that doesn't expose too many methods to people
type Mark = {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
};

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(lat: number, lng: number, rootElement?: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(rootElement || "#map"),
      {
        backgroundColor: "#7DD9B3",
        center: { lat, lng },
        zoom: 3
      }
    );
  }

  addMarker(...markers: Mark[]): void {
    markers.forEach(
      (mark: Mark) =>
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

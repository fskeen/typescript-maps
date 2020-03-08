// creating the custom map function that doesn't expose too many methods to people
export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(lat: number, lng: number) {
    this.googleMap = new google.maps.Map(document.querySelector("#map"), {
      backgroundColor: "#7DD9B3",
      center: { lat, lng },
      zoom: 5
    });
  }
  addMarker() {
    console.log("bam!");
  }
}

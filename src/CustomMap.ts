// creating the custom map function that doesn't expose too many methods to people
export interface Mark {
  location: {
    lat: number;
    lng: number;
  };
  name: string;
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  // the private modifier protects the powerful methods on the Google Map from being used outside this class (which is where we're creating our own version of the map)
  constructor(lat: number = 0, lng: number = 0, rootElement?: string) {
    this.googleMap = new google.maps.Map(
      document.querySelector(rootElement || "#map"),
      {
        backgroundColor: "#7DD9B3",
        center: { lat, lng },
        zoom: 3
      }
    );
  }

  // method to add some simple markers with labels. Can accomodated any number of markers!
  addMarker(...markers: Mark[]): void {
    // iterate through the markers
    markers.forEach((mark: Mark) => {
      const mapMarker = new google.maps.Marker({
        position: {
          lat: mark.location.lat,
          lng: mark.location.lng
        },
        label: mark.name,
        map: this.googleMap
      });

      // add an event listener to open an info pane with info about that marker
      mapMarker.addListener("click", () => {
        const infoWindow = new google.maps.InfoWindow({
          content: mark.markerContent()
        });
        // when clicked, open the pane on the associated map and the specific map marker
        infoWindow.open(this.googleMap, mapMarker);
      });
    });
    console.log("bam!");
  }
}

// This is the class that will create the User component
import faker from "faker";
import { Mark } from "./CustomMap";
// make sure to install the type definition file for packages that do not already contain them. TS will throw a warning if you don't.

export class User implements Mark {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "hotpink";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    // this.markerContent = this.markerContent()
  }
  markerContent(): string {
    return `${this.name}, a ${faker.name.jobTitle()}`;
  }
}

// This is the class that will create the Company component
import faker from "faker";
import { Mark } from "./CustomMap";

export class Company implements Mark {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  catchphrase: string;
  color: string = "hotpink";

  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
    this.catchphrase = faker.company.catchPhrase();
  }
  markerContent(): string {
    return `${this.name}: ${this.catchphrase}`;
  }
}

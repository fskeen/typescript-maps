// This is the class that will create the User component
import faker from "faker";
// make sure to install the type definition file for packages that do not already contain them. TS will throw a warning if you don't.

export class User {
  name: string;
  location: {
    lat: number;
    long: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
  }
}

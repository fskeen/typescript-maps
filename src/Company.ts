// This is the class that will create the Company component
import faker from "faker";

export class Company {
  name: string;
  location: {
    lat: number;
    long: number;
  };
  catchphrase: string;
  constructor() {
    this.name = faker.company.companyName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude())
    };
    this.catchphrase = faker.company.catchPhrase();
  }
}

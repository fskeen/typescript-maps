import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const company1 = new Company();
const user1 = new User();
new CustomMap(company1.location.lat, company1.location.long);

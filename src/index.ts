import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const company1 = new Company();
const user1 = new User();
const user2 = new User();
const user3 = new User();
const customMap = new CustomMap();

customMap.addMarker(user1, user2, user3, company1);

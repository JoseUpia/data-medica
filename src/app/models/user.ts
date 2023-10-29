import { GenderEnum } from "./enum/gender.enum";

export interface User {
    firstName: string;
    lastName: string;
    gender: GenderEnum | number;
    email: string;
    phone: string;
}

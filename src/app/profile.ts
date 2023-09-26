import { Shoppingcart } from "./shoppingcart";

export class Profile {

    name: string = '';
    email: string = '';
    password: string = '';
    phone: number = 0;
    postalCode: number = 0;
    city: string = '';
    street: string = '';
    houseNumber: number = 0;
    orders: Array<Shoppingcart> = new Array<Shoppingcart>();
}

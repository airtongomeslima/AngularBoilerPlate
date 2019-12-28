import { AddressModel } from './AddressModel';
import { CompanyModel } from './CompanyModel';

export class UserModel {
    constructor() {
        this.address = new AddressModel();
        this.company = new CompanyModel();
    }

    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressModel;
    phone: string;
    website: string;
    company: CompanyModel;
}



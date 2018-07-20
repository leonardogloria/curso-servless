import {Injectable} from "@angular/core";
import { User } from "./user";
@Injectable()
export class UserService {
    public user = new User();
    constructor(){}
}
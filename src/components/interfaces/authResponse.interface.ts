import { UserModel } from "../../models/user.model";

export interface AuthResponse {
   message?: string;
   error?: string;
   user?: UserModel;
}

export interface UserModel {
   id: number;
   login: string;
   mastery: number;
   masteryCap: number;
   fatigue: number;
}

export interface UserCredentials {
   login: string;
   password: string;
}

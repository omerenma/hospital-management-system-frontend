export interface RegisterUser {
  id?:number,
  email:string,
  password:string,
  role:string,
  name:string,
  issent?:number
}

export interface LoginUser {
  email:string,
  password:string,

}

export interface LoginData {
  name:string;
  email:string;
  token:string;

}

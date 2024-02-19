export class User {
   firstName="";
   lastName="";
   email="";
   password="";
   tasks=[];
   state=false
   constructor(firstName,lastName,email,password){
    this.firstName=firstName,
    this.lastName=lastName,
    this.email=email,
    this.password=password
    
   }
}

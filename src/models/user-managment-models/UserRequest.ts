export class User {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    phone:string;
    gender:string;
    description:string;
    password: string;
    repeat_password:string
    blocked: boolean;
    profile_id:any;
   constructor(first_name,last_name,username,email,phone,gender,description,password,reapeatPassword,blocked,id) {
       this.first_name=first_name;
       this.last_name=last_name;
       this.username=username;
       this.email=email;
       this.phone = phone;
       this.gender=gender;
       this.description=description;
       this.password=password;
       this.repeat_password=reapeatPassword;
       this.blocked=blocked;    
       this.profile_id = id
   }
}


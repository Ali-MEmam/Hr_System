export class Profil {
    title: string;
    description: string;
    type_profile: string;
    roles: any;
    constructor(title,description, type_profile,roles) {
        this.title = title;
        this.description = description,
        this.type_profile = type_profile,
        this.roles = roles
    }
}
 
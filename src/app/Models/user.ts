export class User {
  id: number; // Change the data type to number
  username: string;
  email: string;
  password: string;


  constructor(id?: number, username?: string, email?: string, password?: string) {
    this.id = id || 0; // Default value for the id property
    this.username = username || '';
    this.email = email || '';
    this.password = password || '';
  }

}

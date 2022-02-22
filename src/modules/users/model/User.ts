import { v4 as uuidV4 } from "uuid";

class User {
  // Complete aqui
  id: string;
  name: string;
  admin: boolean;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(id?: string, created_at?: Date, updated_at?: Date) {
    this.id = id ?? uuidV4();
    this.created_at = created_at ?? new Date();
    this.updated_at = updated_at ?? new Date();
    this.admin = false;
  }
}

export { User };

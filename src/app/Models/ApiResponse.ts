// api-response.model.ts
import { User } from './user'; // Make sure to adjust the import path based on your project structure

export interface ApiResponse {
  message: string;
  httpStatus: string;
  data: User;
}

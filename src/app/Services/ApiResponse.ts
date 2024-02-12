export class ApiResponse<T> {
  message: string;
  httpStatus: number;
  data: T;

  constructor(message: string, httpStatus: number, data: T) {
    this.message = message;
    this.httpStatus = httpStatus;
    this.data = data;
  }
}

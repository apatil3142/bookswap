export class CustomError extends Error {
  status: number;

  constructor(status: number, message?: string) {
      super(message);
      this.status = status;
  }
}

export const createError = (status: number,message: string)=>{
  const err = new CustomError(status, message);
  err.status=status;
  err.message=message;
  return err;
}
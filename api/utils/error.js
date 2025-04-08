import { error } from "console";

export const errorHandler = (statusCode, message) =>{
    const eroor = new Error();
    error.statusCode=statusCode;
    error.message=message;
    return error;
};
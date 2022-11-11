import {HttpException, HttpStatus} from "@nestjs/common";

export class ValidationException extends HttpException {
    public code: number = 400;
    public message: string;
    constructor(msg, code) {
        super({
            errors: msg,
            code: code,
        }, HttpStatus.BAD_REQUEST);
        this.message = msg;
        this.code = code;
    }
}

import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {ValidationException} from "../exceptions/validation.exception";

@Injectable()
export class OffsetPipe implements PipeTransform<string> {
    transform(value: string = "0", metadata: ArgumentMetadata): number {
        if (!this.isNumeric(value)) {
            throw new ValidationException("Invalid Param", "400: Bad Request");
        }
        const integer = parseInt(value, 10);

        if (integer < 0) {
            throw new ValidationException("Invalid Param", "400: Bad Request");
        }
        return integer;
    }

    protected isNumeric(value: string): boolean {
        return (
            ['string', 'number'].includes(typeof value) &&
            /^-?\d+$/.test(value) &&
            isFinite(value as any)
        );
    }
}

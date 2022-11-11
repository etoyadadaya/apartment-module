import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {ValidationException} from "../exceptions/validation.exception";

@Injectable()
export class SortPipe implements PipeTransform<string> {
    private readonly array = ["id", "floor", "price", "rooms", "area_total", "area_kitchen", "area_live"];

    transform(value: string = "id", metadata: ArgumentMetadata): string {
        let valid = false;
        this.array.forEach(el => {
            if (el === value) {
                valid = true;
            }
        });
        if (!valid) {
            throw new ValidationException("Invalid Param", "400: Bad Request");
        }
        return value;
    }
}

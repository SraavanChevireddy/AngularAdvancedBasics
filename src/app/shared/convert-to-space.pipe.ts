import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'convert_to_spaces'
})
export class ConvertToSpaces implements PipeTransform{
    transform(value: string, character : string) : string{
        return "";
    }
    
}
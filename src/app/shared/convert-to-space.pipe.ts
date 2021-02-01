import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'convertspacespipe'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character : string){
        return;
    }
    
}
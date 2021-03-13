import { Color_ } from "./color";
import { ResponseModel } from "./responseModel";

export interface ColorResponseModel extends ResponseModel{
    data:Color_[]
    
}
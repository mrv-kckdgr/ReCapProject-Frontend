import { ResponseModel } from "../responseModel";
import { CarDetailDto } from "./carDetailDto";


export interface CarDetailResponseModel extends ResponseModel{
    data:CarDetailDto[]
}
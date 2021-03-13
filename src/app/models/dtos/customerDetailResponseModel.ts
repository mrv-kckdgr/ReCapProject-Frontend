import { ResponseModel } from "../responseModel";
import { CustomerDetailDto } from "./customerDetailDto";

export interface CustomerDetailResponseModel extends ResponseModel{
    data:CustomerDetailDto[];
}
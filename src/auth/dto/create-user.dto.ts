import { IsEmail, IsString, MinLength } from "class-validator";
import { Address } from "../entities/address.entity";


export class CreateUserDto {
    @IsString()
    name: string;

    @IsString()
    nickname : string;
    
    @IsString()
    profilePicture ?: string; 

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;
    
    @IsString()
    phone : string;

    birthday?: Date | null;


    address: Address; 

}

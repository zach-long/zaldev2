import { IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsBoolean()
    isAdmin: boolean;
}

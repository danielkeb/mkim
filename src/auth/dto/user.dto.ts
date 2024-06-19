import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  role: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}
export class MemberDto {
  @IsString()
  @IsNotEmpty()
  memberId: string;

  @IsString()
  @IsNotEmpty()
  FirstName: string;

  @IsString()
  @IsNotEmpty()
  LastName: string;

  @IsString()
  @IsOptional()
  ContactNumber?: string;
  Address?: string;
  MembershipID?: string;

  @IsOptional()
  MemberSince?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
  @IsDate()
  @IsOptional()
  RenewalDate?: Date;
}
export class DtoSignin {
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

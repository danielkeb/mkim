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
  userId: number;
  @IsEmail()
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
  memberId: number;

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

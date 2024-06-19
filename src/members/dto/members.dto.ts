import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

enum Status {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending',
}
export class MemberDto {
  @IsString()
  @IsNotEmpty()
  memberID: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  contactNumber?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsInt()
  @IsOptional()
  membershipID?: number;

  @IsOptional()
  memberSince?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;
  @IsDate()
  @IsOptional()
  renewalDate?: Date;

  @IsString()
  @IsNotEmpty()
  user_Id: string;
}

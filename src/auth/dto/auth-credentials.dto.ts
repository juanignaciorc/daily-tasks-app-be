import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  /**
   * Password will contain at least 1 upper case letter
   *
   * Password will contain at least 1 lower case letter
   *
   * Password will contain at least 1 number or special character
   *
   * There is no length validation (min, max) in this regex
   */
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'the password is too weak',
  })
  password: string;
}

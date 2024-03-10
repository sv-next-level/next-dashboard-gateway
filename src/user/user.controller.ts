import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UserService } from "@/user/user.service";
import { User } from "@/schemas/user.schema";
import { createUserDto, updateUserDto } from "@/dtos/user.dto";
import { isMongoIdValid } from "@/dtos/misc.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("new")
  async createNewUser(@Body() userData: createUserDto): Promise<User> {
    return this.userService.createNewUser(userData);
  }

  @Get("all")
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(":userId")
  async findUserById(@Param("userId") userId: string): Promise<User> {
    const isUserIdValid: boolean = isMongoIdValid(userId);
    if (!isUserIdValid) {
      throw new BadRequestException("Invalid user id!");
    }
    return this.userService.findUserById(userId);
  }

  @Put(":userId")
  async updateUserById(
    @Param("userId") userId: string,
    @Body() userData: updateUserDto
  ): Promise<User> {
    const isUserIdValid: boolean = isMongoIdValid(userId);
    if (!isUserIdValid) {
      throw new BadRequestException("Invalid user id!");
    }
    return this.userService.updateUserById(userId, userData);
  }

  @Delete(":userId")
  async deleteUserById(@Param("userId") userId: string): Promise<User> {
    const isUserIdValid: boolean = isMongoIdValid(userId);
    if (!isUserIdValid) {
      throw new BadRequestException("Invalid user id!");
    }
    return this.userService.deleteUserById(userId);
  }
}

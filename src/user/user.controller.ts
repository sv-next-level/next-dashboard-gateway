import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { UserService } from "@/user/user.service";
import { User } from "@/user/user.schema";
import { userDto } from "@/user/user.dto";

@Controller("user")
export class UserController {
  constructor(private userService: UserService) {}

  @Post("new")
  async createNewUser(@Body() userData: userDto): Promise<User> {
    return this.userService.createNewUser(userData);
  }

  @Get("all")
  async findAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(":userId")
  async findUserById(@Param("userId") userId: string): Promise<User> {
    return this.userService.findUserById(userId);
  }

  @Put(":userId")
  async updateUserById(
    @Param("userId") userId: string,
    @Body() userData: userDto
  ): Promise<User> {
    return this.userService.updateUserById(userId, userData);
  }

  @Delete(":userId")
  async deleteUserById(@Param("userId") userId: string): Promise<User> {
    return this.userService.deleteUserById(userId);
  }
}

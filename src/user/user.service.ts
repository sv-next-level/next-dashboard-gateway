import { Model } from "mongoose";
import { User } from "@/schemas/user.schema";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createNewUser(userData: User): Promise<User> {
    try {
      const newUser = await this.userModel.create(userData);
      return newUser;
    } catch (error) {
      console.log(error);
    }
  }

  async findAllUsers(): Promise<User[]> {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findUserById(userId: string): Promise<User> {
    const existingUser = await this.userModel.findById(userId);
    return existingUser;
  }

  async updateUserById(userId: string, userData: User): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      userId,
      userData,
      {
        new: true,
        runValidators: true,
      }
    );
    return updatedUser;
  }

  async deleteUserById(userId: string): Promise<User> {
    const deleteUser = await this.userModel.findByIdAndDelete(userId);
    return deleteUser;
  }
}

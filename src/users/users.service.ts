import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from 'src/dto/users.dto';
import { User, UserDocument } from 'src/models/users.models';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  Add(body: UserDto): Promise<User> {
    return this.userModel.create(body);
  }

  Update(id: string, body: UserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(
      { _id: id },
      { $set: body },
      { new: true },
    );
  }

  Delete(id: string): Promise<{ acknowledged: boolean; deletedCount: number }> {
    return this.userModel.deleteOne({ _id: id });
  }

  FindAll(): Promise<User[]> {
    return this.userModel.find();
  }
  // FindOne(id: string) {
  //   return this.userModel.findOne({ _id: id });
  // }

  // Search(key: string) {
  //   const keyword = key
  //     ? {
  //         $or: [{ name: { $regex: key, $options: 'i ' } }],
  //       }
  //     : {};
  //   return this.userModel.find(keyword);
  // }
}

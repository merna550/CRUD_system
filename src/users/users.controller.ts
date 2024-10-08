import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  Put,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Post()
  Add(@Body() body: UserDto) {
    return this.service.Add(body);
  }
  @Put('/:id')
  Update(@Param('id') id: string, @Body() body: UserDto) {
    return this.service.Update(id, body);
  }
  @Delete('/:id')
  Delete(@Param('id') id: string) {
    return this.service.Delete(id);
  }
  @Get()
  FindAll() {
    return this.service.FindAll();
  }
  // @Get('/:id')
  // FindOne(@Param('id') id: string) {
  //   return this.service.FindOne(id);
  // }

  // @Post('/:search')
  // Search(@Query('key') key: string) {
  //   return this.service.Search(key);
  // }

  // @Post('/faker')
  // Faker() {
  //   return this.service.Faker();
  // }
}

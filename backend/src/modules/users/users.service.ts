import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private repo: Repository<Users>,
  ) {}

  create(email: string, password: string) {
    const newUser = this.repo.create({ email, password });
    return this.repo.save(newUser);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  findById(id: string) {
    return this.repo.findOne({ where: { id } });
  }
}

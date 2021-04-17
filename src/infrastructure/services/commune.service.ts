import { CommuneCreateDTO } from './../../domain/dto/commune-create.dto';
import { Commune } from './../../domain/models/commune.entity';
import { Injectable } from '@nestjs/common';

import { BaseService } from './base.service';

@Injectable()
export class CommuneService extends BaseService<Commune> {
  constructor() {
    super(Commune);
  }

  async findAll(): Promise<Commune[]> {
    return this.communeRepository.find();
  }

  async create(payload: CommuneCreateDTO): Promise<Commune> {
    return this.communeRepository.save(new Commune(payload));
  }
}

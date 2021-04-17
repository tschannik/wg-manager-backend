import { Commune } from './../../domain/models/commune.entity';
import { CommuneService } from './../../infrastructure/services/commune.service';
import { Controller, Get, Post, Body, Param, Inject } from '@nestjs/common';
import { CommuneCreateDTO } from 'src/domain/dto/commune-create.dto';

@Controller('commune')
export class CommuneController {
  @Inject(CommuneService)
  private readonly communeService: CommuneService;

  @Get()
  async findAll(): Promise<Commune[]> {
    return this.communeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Commune> {
    return this.communeService.findOne(id);
  }

  @Post()
  async create(@Body() payload: CommuneCreateDTO): Promise<Commune> {
    return this.communeService.create(payload);
  }
}

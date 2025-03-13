import { ConfigService } from '@nestjs/config';
import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig = (ConfigService:ConfigService): TypeOrmModuleOptions=>({
    type:'postgres',
    host:ConfigService.get('DB_HOST'),
    port:ConfigService.get('DB_PORT'),
    username:ConfigService.get('DB_USERNAME'),
    password:ConfigService.get('DB_PASSWORD'),
    database:ConfigService.get('DB_NAME'),
    logging:true,
    entities:[join(__dirname +'../../**/*.entity.{js,ts}')],
    synchronize:true
})
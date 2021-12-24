import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelloController } from './hello.controller';
import { ConfigModule } from './modules/config/config.module';
import { ConfigService } from './modules/config/config.service';
import { UserModule } from './modules/user/user.module';

// const configProvider = Symbol('#configProvider');
@Module({
  controllers: [HelloController],
  imports: [
    ConfigModule,
    UserModule,
    TypeOrmModule.forRootAsync({
      // imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return configService.getDbConfig();
      },
      inject: [ConfigService],
      // inject: [
      //   {
      //     provide: ConfigService,
      //     useClass: ConfigService,
      //   },
      // ],
      // inject: [
      //   {
      //     provide: configProvider,
      //     useValue: new ConfigService(),
      //   },
      //  ],
      // inject: [
      //   {
      //     provide: 'AnotherConfigService',
      //     useExisting: ConfigService,
      //   },
      // ],
    }),
  ],
})
export class Chapter1Module {}

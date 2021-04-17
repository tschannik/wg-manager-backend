import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1618691889973 implements MigrationInterface {
  name = 'InitialMigration1618691889973';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `eventcategory` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, UNIQUE INDEX `IDX_4e6ac29e239c4bea361d0985ac` (`uuid`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `event` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `name` varchar(255) NOT NULL, `start_date` datetime NOT NULL, `end_date` datetime NOT NULL, `repeat_interval` int NOT NULL, `typeId` int NULL, UNIQUE INDEX `IDX_d2ea43d0ee94369479bfbbfff4` (`uuid`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `commune` (`id` int NOT NULL AUTO_INCREMENT, `uuid` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `string` varchar(255) NOT NULL, UNIQUE INDEX `IDX_98049bd64a49cbf57cb98dae36` (`uuid`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `user` (`username` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`username`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `commune_events_event` (`communeId` int NOT NULL, `eventId` int NOT NULL, INDEX `IDX_b237047342b2f8211680382c0c` (`communeId`), INDEX `IDX_875d799e7c1733381133ceb1f9` (`eventId`), PRIMARY KEY (`communeId`, `eventId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'CREATE TABLE `user_communes_commune` (`userUsername` varchar(36) NOT NULL, `communeId` int NOT NULL, INDEX `IDX_c56c2f90d2f529f99d59ee546f` (`userUsername`), INDEX `IDX_8c46053f203c487a3802b9b999` (`communeId`), PRIMARY KEY (`userUsername`, `communeId`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `event` ADD CONSTRAINT `FK_255cc0faa667931c91431716165` FOREIGN KEY (`typeId`) REFERENCES `eventcategory`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `commune_events_event` ADD CONSTRAINT `FK_b237047342b2f8211680382c0c5` FOREIGN KEY (`communeId`) REFERENCES `commune`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `commune_events_event` ADD CONSTRAINT `FK_875d799e7c1733381133ceb1f97` FOREIGN KEY (`eventId`) REFERENCES `event`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `user_communes_commune` ADD CONSTRAINT `FK_c56c2f90d2f529f99d59ee546f5` FOREIGN KEY (`userUsername`) REFERENCES `user`(`username`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `user_communes_commune` ADD CONSTRAINT `FK_8c46053f203c487a3802b9b9999` FOREIGN KEY (`communeId`) REFERENCES `commune`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `user_communes_commune` DROP FOREIGN KEY `FK_8c46053f203c487a3802b9b9999`',
    );
    await queryRunner.query(
      'ALTER TABLE `user_communes_commune` DROP FOREIGN KEY `FK_c56c2f90d2f529f99d59ee546f5`',
    );
    await queryRunner.query(
      'ALTER TABLE `commune_events_event` DROP FOREIGN KEY `FK_875d799e7c1733381133ceb1f97`',
    );
    await queryRunner.query(
      'ALTER TABLE `commune_events_event` DROP FOREIGN KEY `FK_b237047342b2f8211680382c0c5`',
    );
    await queryRunner.query(
      'ALTER TABLE `event` DROP FOREIGN KEY `FK_255cc0faa667931c91431716165`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_8c46053f203c487a3802b9b999` ON `user_communes_commune`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_c56c2f90d2f529f99d59ee546f` ON `user_communes_commune`',
    );
    await queryRunner.query('DROP TABLE `user_communes_commune`');
    await queryRunner.query(
      'DROP INDEX `IDX_875d799e7c1733381133ceb1f9` ON `commune_events_event`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_b237047342b2f8211680382c0c` ON `commune_events_event`',
    );
    await queryRunner.query('DROP TABLE `commune_events_event`');
    await queryRunner.query('DROP TABLE `user`');
    await queryRunner.query('DROP INDEX `IDX_98049bd64a49cbf57cb98dae36` ON `commune`');
    await queryRunner.query('DROP TABLE `commune`');
    await queryRunner.query('DROP INDEX `IDX_d2ea43d0ee94369479bfbbfff4` ON `event`');
    await queryRunner.query('DROP TABLE `event`');
    await queryRunner.query('DROP INDEX `IDX_4e6ac29e239c4bea361d0985ac` ON `eventcategory`');
    await queryRunner.query('DROP TABLE `eventcategory`');
  }
}

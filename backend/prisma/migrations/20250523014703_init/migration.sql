-- CreateTable
CREATE TABLE `tab_usuarios` (
    `id_usuario` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(20) NOT NULL,
    `login` VARCHAR(20) NOT NULL,
    `senha` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id_usuario`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tab_mesas` (
    `id_mesa` INTEGER NOT NULL AUTO_INCREMENT,
    `numero_mesa` INTEGER NOT NULL,
    `status` ENUM('Disponivel', 'Reservada') NOT NULL,

    UNIQUE INDEX `tab_mesas_numero_mesa_key`(`numero_mesa`),
    PRIMARY KEY (`id_mesa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tab_reservas` (
    `id_reservas` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_cliente` VARCHAR(50) NOT NULL,
    `id_mesa` INTEGER NOT NULL,
    `quantidade_pessoas` INTEGER NOT NULL,
    `data_hora_reserva` DATETIME(3) NOT NULL,
    `status` ENUM('Pendente', 'Confirmado', 'Cancelado') NOT NULL,

    PRIMARY KEY (`id_reservas`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tab_relatorio` (
    `id_relatorio` INTEGER NOT NULL AUTO_INCREMENT,
    `id_reservas` INTEGER NOT NULL,

    PRIMARY KEY (`id_relatorio`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tab_reservas` ADD CONSTRAINT `tab_reservas_id_mesa_fkey` FOREIGN KEY (`id_mesa`) REFERENCES `tab_mesas`(`id_mesa`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tab_relatorio` ADD CONSTRAINT `tab_relatorio_id_reservas_fkey` FOREIGN KEY (`id_reservas`) REFERENCES `tab_reservas`(`id_reservas`) ON DELETE RESTRICT ON UPDATE CASCADE;

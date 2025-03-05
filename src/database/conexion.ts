import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Juanber123()',
    database: 'marvel',
    logging: true,
    entities: [],
});
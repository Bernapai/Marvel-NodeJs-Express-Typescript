import { DataSource } from "typeorm";
import Personaje from "../models/personaje";
import Comic from "../models/comic";
import Pelicula from "../models/pelicula";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Juanber123()',
    database: 'marvel',
    logging: true,
    entities: [Pelicula, Personaje, Comic],
    synchronize: true,
});
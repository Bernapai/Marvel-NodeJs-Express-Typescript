import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Personaje from "./personaje"


@Entity('peliculas')
export default class Pelicula {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nombre: String;

    @Column()
    duracion: Number;

    @Column()
    fecha_lanzamiento: Date;

    @Column()
    descripcion: String;

    @ManyToMany(() => Personaje, (personaje) => personaje.peliculas) // Relación de muchos a muchos
    personajes: Personaje[];  // Lista de personajes en la película

}
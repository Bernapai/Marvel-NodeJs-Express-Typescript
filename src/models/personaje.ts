import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Pelicula from "./pelicula";
import Comic from "./comic";

@Entity('personajes')
export default class Personaje {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nombre: String;

    @Column()
    afiliaciones: String;

    @Column()
    primera_aparicion: String;

    @Column()
    aliados: String

    @Column()
    enemigos: String

    @Column()
    descripcion: String;

    @ManyToMany(() => Pelicula, (pelicula) => pelicula.personajes) // Relación de muchos a muchos
    @JoinTable()
    peliculas: Pelicula[];

    @ManyToMany(() => Comic, (comic) => comic.personajes)
    @JoinTable()
    comics: Comic[];
}
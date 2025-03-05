import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Personaje from "./personaje"

@Entity('comics')
export default class Comic {
    @PrimaryGeneratedColumn()
    id: Number;

    @Column()
    nombre: String;

    @Column()
    cantidadHojas: Number;

    @Column()
    fecha_lanzamiento: Date;

    @Column()
    descripcion: String;

    @ManyToMany(() => Personaje, (personaje) => personaje.comics) // Relación de muchos a muchos
    personajes: Personaje[];

}
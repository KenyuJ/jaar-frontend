import { Persona } from "./persona.interface";

export interface Usuario {
    usu_id?:     string;
    usu_nombre?: string;
    usu_tipo?:   string;
    usu_estado?: boolean;
    persona?:    Persona;
}
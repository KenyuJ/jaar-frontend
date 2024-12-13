import { Usuario } from "./usuario.interface";

export interface AuthResponse {
    login: LoginResponse;
}

export interface LoginResponse {
    token:   string;
    usuario: Usuario;
}
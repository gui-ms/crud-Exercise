import { v4 as uuidv4 } from 'uuid';
import Usuario from '../model/Usuario';
import Id from '../model/Id';


const usuarios: Usuario[] = [
    { id: Id.novo(), email: "usuario1@exemplo.com", nome: "Usuário 1", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario2@exemplo.com", nome: "Usuário 2", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario3@exemplo.com", nome: "Usuário 3", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario4@exemplo.com", nome: "Usuário 4", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario5@exemplo.com", nome: "Usuário 5", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario6@exemplo.com", nome: "Usuário 6", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario7@exemplo.com", nome: "Usuário 7", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario8@exemplo.com", nome: "Usuário 8", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario9@exemplo.com", nome: "Usuário 9", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario10@exemplo.com", nome: "Usuário 10", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario11@exemplo.com", nome: "Usuário 11", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario12@exemplo.com", nome: "Usuário 12", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario13@exemplo.com", nome: "Usuário 13", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario14@exemplo.com", nome: "Usuário 14", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario15@exemplo.com", nome: "Usuário 15", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario16@exemplo.com", nome: "Usuário 16", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario17@exemplo.com", nome: "Usuário 17", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario18@exemplo.com", nome: "Usuário 18", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario19@exemplo.com", nome: "Usuário 19", senha: "Senha@123" },
    { id: Id.novo(), email: "usuario20@exemplo.com", nome: "Usuário 20", senha: "Senha@123" },
];

export default usuarios;
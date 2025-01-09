"use client"

import { useState } from "react"
import todosOsUsuarios from "../../data/constants/usuarios"
import Usuario from "../../data/model/Usuario";
import React from "react";
import ListaUsuarios from "./ListaUsuarios";
import FormUsuario from "./FormUsuario";
import Id from "../../data/model/Id";

export default function CadastroUsuario() {
    const [usuarioAtual, setUsuarioAtual] = useState<Partial<Usuario> | null>(null);
    const [usuarios, setUsuarios] = useState<Usuario[]>(todosOsUsuarios);

    function removerUsuario (usuario: Usuario) {
        const novosUsuarios = usuarios.filter(u => u.id !== usuario.id);
        setUsuarios(novosUsuarios);
    }


    function selecionarUsuario (usuario: Partial<Usuario>) {
        setUsuarioAtual(usuario);
    }

    function salvarUsuario () {
        const usuarioExiste = usuarios.find((u) => u.id === usuarioAtual?.id);
        
        if(usuarioExiste){
            const novosUsuarios = usuarios.map((u) => {
                return u.id === usuarioAtual?.id ? usuarioAtual : u;
            })
            setUsuarios(novosUsuarios as Usuario[]);
        }

        else {
            setUsuarios([...usuarios, usuarioAtual as Usuario])
        }

        setUsuarioAtual(null);
    }

    function cancelar (){
        setUsuarioAtual(null);
    }

    return (
        <div className="flex flex-col gap-5">
            <span>Cadastro Usuário!</span>
            <button className="botao verde self-end" onClick={()=>selecionarUsuario({id: Id.novo()})}>Adicionar Usuário</button>

            {usuarioAtual ? 
                (<FormUsuario usuario={usuarioAtual} salvar={salvarUsuario} alterarUsuario={setUsuarioAtual} cancelar={cancelar}/>)
                :
                (<ListaUsuarios usuarios={usuarios} removerUsuario={removerUsuario} SelecionarUsuario={selecionarUsuario}/>)
            }
        </div>
    )
}
"use client"

import Usuario from "../../data/model/Usuario";
import React from "react";

export interface ListaUsuariosProps {
    usuarios: Usuario[];
    SelecionarUsuario: (usuario: Usuario) => void
    removerUsuario: (usuario: Usuario) => void
}


export default function ListaUsuarios(props: ListaUsuariosProps) {
    function renderizarUsuario(usuario: Usuario){
        return (
            <div className="flex items-center px-6 py-1 rounded-md bg-gray-500">
                <div className="flex-1 flex flex-col">
                    <span className="font-semibold">{usuario.nome}</span>
                    <span className="text-sm text-zinc-700">{usuario.email}</span>
                </div>
                <div className="flex items-center gap-3">
                    <button 
                        className="botao azul"
                        onClick={() => props.SelecionarUsuario(usuario)}
                    >
                        Alterar</button>
                    <button 
                        className="botao vermelho"
                        onClick={() => props.removerUsuario(usuario)}
                    >
                        Excluir</button>
                </div>
            </div>
        )
    }

    return(
        <div >
            <ul className="flex flex-col gap-3">
            {props.usuarios.map(usuario => {
                return <li key={usuario.id}>{renderizarUsuario(usuario)}</li>
            })}
            </ul>
        </div>
        
    )
}
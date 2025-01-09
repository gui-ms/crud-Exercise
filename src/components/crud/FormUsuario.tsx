"use client"

import Usuario from "../../data/model/Usuario";
import React from "react";

export interface FormUsuariosProps {
    usuario: Partial<Usuario>;
    alterarUsuario: (usuario: Partial<Usuario>) => void;
    salvar: () => void;
    cancelar: () => void;
}


export default function FormUsuario(props: FormUsuariosProps) {
    const {usuario, alterarUsuario} = props;
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
                <span>Nome</span>
                <input 
                    className="input" 
                    type="text" 
                    onChange={e => (alterarUsuario({...usuario, nome: e.target.value }))} 
                    value={usuario.nome ?? ""}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                    <span>Email</span>
                    <input 
                        className="input" 
                        type="text" 
                        onChange={e => (alterarUsuario({...usuario, email: e.target.value }))} 
                        value={usuario.email ?? ""} />
                </div>
                <div className="flex flex-col gap-1">
                    <span>Senha</span>
                    <input 
                        className="input" 
                        type="password" 
                        onChange={e => (alterarUsuario({...usuario, senha: e.target.value }))}
                        value={usuario.senha ?? ""} />
                </div>
            </div>
            <div className="flex gap-2">
                <button className="botao azul" onClick={() => props.salvar()}>Salvar</button>
                <button className="botao cinza" onClick={() => props.cancelar()}>Cancelar</button>
            </div>
        </div>
    )
}
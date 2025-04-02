"use client"

import { ReactNode, useState } from "react"
import { Button } from "../utils/button"
import { TextInput } from "../utils/textInput"

export default function LogForm() {
    const [firstLogin, setFirstLogin] = useState<boolean>(false)

    const LogInComponent = () => {
        return (
            <>
                <h2 className="text-3xl">Já adoro a Laranja</h2>
                
                <TextInput id="email" type="email" needLabel={true} label = "Email:"/>
                <TextInput id="password" type="password" needLabel={true} label = "Senha:"/>
                <TextInput id="nome" type="text" needLabel={true} label = "Nome:"/>
                <TextInput id="username" type="email" needLabel={true} label = "Apelido:"/>
                <TextInput id="genero" type="range" needLabel={true} label = "Genero:"/>
                <select class="select1" >
                    <option value="h-cis">Ele/Dele</option>
                    <option value="m-cis">Ela/Dela</option>
                    <option value="nb">Elu/Delu</option>
                </select>

                <Button>
                    <p>Registrar</p>
                </Button>
            </>
        )
    }

    const LogOnComponent = () => {
        return (
            <>
                <h2 className="text-3xl">Vou entrar para seita</h2>
            </>
        )
    }

    return (
        <>
            {!firstLogin ? (
                <LogInComponent />
            ) : (
                <LogOnComponent />
            )}

        </>
    )
};

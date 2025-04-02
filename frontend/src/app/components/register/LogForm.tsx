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
                
                <TextInput id="email" type="email" needLabel={true} label = "Teste:"/>
                <Button>
                    <p>teste</p>
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

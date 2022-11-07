import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <div>
            Video!
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>
                Trocar modo
            </button>
        </div>
    )
}
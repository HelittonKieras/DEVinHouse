// Utilizar useState para realizar contagem de cliques

import React, { useState } from "react";

export default function CountClicks() {

    const [count, setCount] = useState (0)

    return (
        <div>
            { count === 1 
            ? <h1>Clicou {count} vez</h1> 
            : <h1>Clicou {count} vezes</h1> 
            }
            
            <button type="button" onClick={() => setCount(prev => prev + 1)}>Clique para contar</button>
        </div>
    )
}
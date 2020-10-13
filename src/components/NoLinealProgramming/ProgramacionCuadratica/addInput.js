import React, { useState } from "react";
import {Input, Button} from 'reactstrap';



function HookCounterInputsNumbers() {
    const [items, setitems] = useState([])

    const addItem = () => {
        setitems([... items, {
            id: items.length,
            value:  <Input
                    type="number" min="-99" max="99"
                    placeholder="Ingrese un numero"
                    />
        }])
    }

    return (
    <div>
        <Button onClick={addItem}> Agregar un Input</Button>
        <ul>
            {items.map(item =>
                (<li key ={item.id}> {item.value}</li>)
                )
            }
        </ul>

    </div>
    ) 

}

export default HookCounterInputsNumbers;


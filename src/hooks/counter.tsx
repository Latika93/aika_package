import * as React from 'react'
import { useState } from 'react'

const useCounter = () => {

    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }

    const decrememt = () => {
        setCount(count - 1);
    }

    return { count, increment, decrememt };
}

export { useCounter };
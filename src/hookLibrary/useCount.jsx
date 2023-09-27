// Compnentes de React
import { useState } from 'react'


// Components propios


// Custom Hook
const useCount = () => {

    const [count, setCount] = useState (0)

    const increment = () => setCount (count + 1)
    const decrement = () => setCount (count - 1)

    return {count , setCount}

};

export default useCount;
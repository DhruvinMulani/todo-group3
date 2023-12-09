import {useState} from "react"

const CustomHook = (initialValue) => {
    const [todoCompletionValue, setCompletionValue ] = useState(initialValue)
    
    const toggle = (todoId) => {    
        setCompletionValue((previousValue) => !previousValue);
    }
    
    return { todoCompletionValue, toggle }
}

export default CustomHook
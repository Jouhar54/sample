
import { useEffect, useState } from 'react'
import API from '../../api/axiosInst'

const Home = () => {
    const [todos, setTodos] = useState([])

    const getList = async () => {
        const res = await API.get('/todos/')
        setTodos(res.data)
    }

    useEffect(() => {
        getList()
    }, [])

    return (
        <div>
            <h1 className='bg-green-400' >Home Page</h1>
            <h2>Todo List:</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home
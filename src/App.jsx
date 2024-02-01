import { BrowserRouter, Route ,Routes} from "react-router-dom"

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
            <Route path='/' element={ <LoginPage/>}/>
                <Route path='/login' element={ <LoginPage/>}/>
                <Route path='/home' element={ <HomePage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
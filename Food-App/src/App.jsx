
import './App.css'
import Routing from "./componates/navigtionbar/Routing"
import UsecontaxtProvider from './contaxtapi/UsecontaxtProvider'

function App() {


  return (
    <UsecontaxtProvider>
<Routing/>
    </UsecontaxtProvider>
  )
}

export default App

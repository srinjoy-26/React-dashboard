import Sidebar from './components/Sidebar'
import Values from './components/Values'
import Expenselist from './components/Expenselist'
import Expensegraph from './components/Expensegraph'

export default function App() {
  return (
   <div className="flex ">
     <Sidebar/>

     <div className="w-full bg-black ">
     <Values/>
     <div className= "grid md:grid-cols-2 gap-4 px-4 sm:grid-rows-2">
      <Expensegraph/>
      <Expenselist/>
     </div>
     </div>
   </div>
  )
}
const Sidebar = () =>{
  
  let sideElem = [{title:'Dashboard'} , {title:'Analytics'}, {title:'Expense'}, {title:'Revenue'} , {title:'About'}]

  return(
    <div className="h-screen w-72 p-4 pt-5 bg-[#F3F8FF]">
        <h1 className="text-xl font-semibold">Expense-dashboard</h1>

        <ul>
          {sideElem.map((item , index) => {
             return( <li key={index} className="text-gray-950 text-md cursor-pointer p-4 mt-3 hover:bg-blue-300 rounded">
              <span>{item.title}</span>
            </li>)
          })}
          
         
        </ul>
      </div>
  )
}

export default Sidebar;
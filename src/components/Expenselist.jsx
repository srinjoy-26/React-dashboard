const Expenselist = () =>{
  const tablevalues = [
    { ID: 1, name: 'Ramesh', amount: 23456 },
    { ID: 2, name: 'Vishal', amount: 12345 },
    { ID: 3, name: 'Tushar', amount: 49876 },
    { ID: 4, name: 'Arpita', amount: 36789 },
    { ID: 5, name: 'Jack', amount: 4567 },
    { ID: 6, name: 'John', amount: 28901 },
    { ID: 7, name: 'Banashree', amount: 16789 },
    { ID: 8, name: 'Srinjoy', amount: 34567 },
    { ID: 9, name: 'Ilham', amount: 43210 },
    { ID: 10, name: 'Nirvik', amount: 19876 }
  ];
 return(
  <div className="bg-[#F3F8FF] rounded-md">
    <table className="w-full">
      <thead className="bg-slate-200">
        <tr>
        <td className="px-2 py-0.5">ID</td>
        <td>NAME</td>
        <td>AMOUNT</td>
        </tr>
      </thead>

      <tbody>
          {tablevalues.map((item , index)=>{
            return(
              <tr key={index}>
                <td className="text-blue-400 px-2 py-0.5 shadow-sm">{item.ID}</td>
                <td className="text-red-500 px-2 py-0.5 shadow-sm">{item.name}</td>
                <td className="text-state-500 px-2 py-0.5 shadow-sm">{item.amount}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  </div>
 )
}

export default Expenselist;
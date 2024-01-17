const Values = () =>{
  let valueamounts = [{title: 'Total Spends' , amount: '₹3,38,676'} , 
  {title: 'Total Earnings' , amount: '₹7,67,998'} , {title: 'Total Expenses' , amount: '₹2,18,000'}];
 return(
  <>
    <div className="pt-5 md:flex justify-around w-full sm:block ">
          <div>
            <p className="text-white text-lg font-medium">Expenses Analysis</p>
          </div>
          <div className="px-2">
            <span
              className="text-white text-sm font-normal border border-white py-1 px-2 mr-2"
              >As on Date: 1.01.2024</span
            >
            <span
              className="text-white text-sm font-normal border border-white py-1 px-2"
              >Period 1.09.2023 to 31.01.2024</span
            >
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 p-4 pt-6 sm:grid-rows-3">
          {valueamounts.map((item , index)=>{
            return(<div key={index} className="bg-[#F3F8FF] rounded-md p-3">
            <h2 className="text-2xl font-normal">{item.title}</h2>
            <p className="text-2xl font-semibold">{item.amount}</p>
          </div>)
          })}
          
         
        </div>
  </>
 )
}

export default Values;
import { createContext, useState } from "react"

  export const MainContext=createContext()




function MainProvider({children}) {
    const [basket, setbasket] = useState([]);
    const [wish, setwish] = useState([]);



    function addbasket(item) {
        setbasket([...basket,item])
        
    }
    function deletebasket(item) {
        setbasket([...basket.filter((x)=>x._id!==item._id)])

        
    }

    function addwish(item) {
        setwish([...wish,item])
        
    }
    function deletewish(item) {
        setwish([...wish.filter((x)=>x._id!==item._id)])

        
    }



    


  return (
    <div>
        
        <MainContext.Provider value={{basket,setbasket,addbasket,deletebasket,addwish,deletewish,wish,setwish}}>


        {children}

        </MainContext.Provider>
    </div>
  )
}

export default MainProvider
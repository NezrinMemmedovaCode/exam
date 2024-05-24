import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import "./Admin.scss"
function Admin() {
    const [admin, setadmin] = useState([]);
   

    function az(params) {
        search.sort((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))
        
    }






    useEffect(() => {
        fetch("http://localhost:3000/product")
        .then(res=>res.json())
        .then(data=>setadmin(data))
      
    }, []);
    function deleteadmin(id) {
        fetch("http://localhost:3000/product/" +id,{
            method:"delete",
        })
        .then(res=>res.json())
        .then(data=>setadmin([...admin.filter((x)=>x._id!==data._id)]))

        
        
    }
  return (
    <div className="admin">
         <>
        <Helmet>
        <title> Admin</title>
       
      </Helmet>
        </>
        <table>

        <tr>
            <th>img</th>
            <th>name</th>
            <th>title</th>
            <th>options</th>
        </tr>
       

        {admin
        .map((x)=><tr key={x.id}>
            <td><img src={x.img} alt="" /></td>
            <td>{x.name}</td>
            <td>{x.title}</td>

            <td><button onClick={()=>deleteadmin(x._id)}><i className="fa-solid fa-trash"></i></button></td>
          


        </tr>)}
        </table>

    </div>
  )
}

export default Admin
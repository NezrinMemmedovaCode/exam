import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { MainContext } from "../../context/MainProvider"
import "./Basket.scss"

function Basket() {
    const { basket, deletebasket } = useContext(MainContext)
    return (
        <div className="baskett">
            <>
                <Helmet>
                    <title> Basket</title>

                </Helmet>
            </>

            <div className="cards">
                {basket.map((x) => <div className="card" key={x.id}>

                    <img src={x.img} alt="" />
                    <h1>{x.name}</h1>
                    <p>
                        {x.title}
                    </p>
                    <button onClick={() => deletebasket(x)}><i className="fa-solid fa-trash"></i></button>

                </div>)}
            </div>


        </div>
    )
}

export default Basket
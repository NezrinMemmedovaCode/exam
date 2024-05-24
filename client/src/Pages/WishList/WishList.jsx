import { useContext } from "react"
import { Helmet } from "react-helmet-async"
import { MainContext } from "../../context/MainProvider"
import "./WishList.scss"

function WishList() {
    const { wish, deletewish } = useContext(MainContext)

    return (
        <div className="wishh">
            <>
                <Helmet>
                    <title> WishList</title>

                </Helmet>

            </>

            <div className="cards">
                {wish.map((x) => <div className="card" key={x.id}>

                    <img src={x.img} alt="" />
                    <h1>{x.name}</h1>
                    <p>
                        {x.title}
                    </p>
                    <button onClick={() => deletewish(x)}><i className="fa-solid fa-trash"></i></button>

                </div>)}
            </div>
        </div>
    )
}

export default WishList
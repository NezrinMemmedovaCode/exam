import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import "./Home.scss"
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";

function Home() {
    const [product, setproduct] = useState([]);
    const { addbasket, addwish } = useContext(MainContext)
    const [search, setsearch] = useState("");
    useEffect(() => {
        fetch("http://localhost:3000/product")
            .then(res => res.json())
            .then(data => setproduct(data))


    }, []);



    return (
        <div>
            <>
                <Helmet>
                    <title> home</title>

                </Helmet>
            </>


            <div className="home1">
                <h1>Welcome to</h1>
                <h2>PATO PLACE</h2>

            </div>
            <div className="home2">
                <div className="box">

                    <h2>Italian Restaurant</h2>
                    <h1>WELCOME</h1>
                    <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                </div>

                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />


            </div>





            <input placeholder="search by name" value={search} onChange={(e) => setsearch(e.target.value)} type="text" />
            <div className="cards">
                {product
                    .filter((x) => x.name.toLowerCase().includes((search.toLocaleLowerCase())))
                    .map((x) => <div className="card" key={x.id}>

                        <img src={x.img} alt="" />
                        <h1>{x.name}</h1>
                        <p>
                            {x.title}
                        </p>
                        <button className="basket" onClick={() => addbasket(x)}><i className="fa-solid fa-cart-shopping"></i></button>
                        <button className="wish" onClick={() => addwish(x)}><i className="fa-solid fa-heart"></i></button>
                        <Link to={`/Detail/${x._id}`}>
                            <button className="detail">LearnMore <i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>)}
            </div>

            <div className="home4">
                <div className="text">

                    <h2>Customers Say</h2>
                    <h1>REVIEW</h1>
                </div>
                <img src="https://preview.colorlib.com/theme/pato/images/avatar-05.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perspiciatis sunt ut accusantium. Fugiat, minima. Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?</p>



            </div>
        </div>
    )
}

export default Home
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import { useParams } from "react-router-dom"
import "./Detail.scss"
function Detail() {
    const { id } = useParams()
    const [detail, setdetail] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/product/${id}`)
            .then(res => res.json())
            .then(data => setdetail(data))


    }, []);
    return (
        <div className="detaill">

            <>
                <Helmet>
                    <title> Detail</title>

                </Helmet>
            </>

            <div className="cards">
                <div className="card">

                    <img src={detail.img} alt="" />
                    <h1>{detail.name}</h1>
                    <p>
                        {detail.title}
                    </p>


                </div>
            </div>


        </div>
    )
}

export default Detail
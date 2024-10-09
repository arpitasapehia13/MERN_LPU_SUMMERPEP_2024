import City from "./City"
import "./Cities.css"

function Cities(){

    const data = [
        {
            "id": "bengaluru",
            "city": "Bengaluru",
            "description": "100+ Places",
            "image": "https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "id": "goa",
            "city": "Goa",
            "description": "250+ Places",
            "image": "https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "id": "kolkata",
            "city": "Kolkata",
            "description": "100+ Places",
            "image": "https://images.pexels.com/photos/2524368/pexels-photo-2524368.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            "id": "singapore",
            "city": "Singapore",
            "description": "100+ Places",
            "image": "https://i.ibb.co/WVL7n8K/singapore.jpg"
        },
        {
            "id": "malaysia",
            "city": "Malaysia",
            "description": "100+ Places",
            "image": "https://images.pexels.com/photos/2940925/pexels-photo-2940925.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        },
        {
            "id": "bangkok",
            "city": "Bangkok",
            "description": "250+ Places",
            "image": "https://images.pexels.com/photos/1682748/pexels-photo-1682748.jpeg?cs=srgb&dl=pexels-ingo-joseph-1682748.jpg&fm=jpg"
        },
        {
            "id": "new-york",
            "city": "New York",
            "description": "100+ Places",
            "image": "https://images.pexels.com/photos/2422588/pexels-photo-2422588.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        },
        {
            "id": "paris",
            "city": "Paris",
            "description": "100+ Places",
            "image": "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        }
    ]

    return(
        <div className="city_container">
            {
                data.map((info)=>{
                    return <City imgUrl={info.image} imgAlt={info.city} cityDescription={info.description} cityName={info.city}/>
                })
            }
        </div>
    )
}

export default Cities
import { useState } from "react"

const Cat = () => {

    const [cat, setCat  ] = useState({
        name: "Dexter",
        age: 5
    })

    const handleClick = () => {
        /* setCat({
            ...cat,
            age: cat.age + 1
        }) */
       setCat( (prev) => ({...prev, age: cat.age + 1 }))
    }

    return (
        <>
            <h2>
                {cat.name} - {cat.age}
            </h2>
            <button 
                onClick={handleClick}
                className="btn btn-dark mb-2">Update age</button>
        </>
    )
}

export default Cat
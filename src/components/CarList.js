import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList(){
    const dispatch = useDispatch();
    const cars = useSelector((state) =>{
        
        return state.cars.data.filter((car)=>
            car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
        );
    }); 

    const handleCarDelete = (car) =>{
        dispatch(removeCar(car.id));
    }

    const renderedCars = cars.map((car) =>{
        return(
            <div key={car.id} className = "panel">
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button onClick={() => handleCarDelete(car)} className="button is-danger">
                    Delete
                </button>
            </div>
        )
    })
    return (
    <div className="car-list">
        {renderedCars}
        <hr/>
    </div>
    );
}
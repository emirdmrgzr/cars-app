import { useSelector } from "react-redux";

export default function CarValue(){
   const totalCost = useSelector((state) =>{
      const filteredCars = state.cars.data.filter((car)=>
      car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
      );
   let cost = 0;
   for(let car of filteredCars){
      cost += car.cost;
      }
   return cost
   });

   return (
   <div className="car-value">
      Total Cost: ${totalCost}
   </div>
   );
}
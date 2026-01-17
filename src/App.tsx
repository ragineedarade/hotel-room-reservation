import { useState } from "react";
import { generateRooms } from "./logic/generateRooms";
import { bookRooms } from "./logic/bookRooms";
import HotelGrid from "./components/HotelGrid";
import Controls from "./components/Controls";

const App = () => {
  const [rooms, setRooms] = useState(generateRooms());

  return (
    <div className="app">
      <h1>Hotel Room Reservation System</h1>
      <Controls
        onBook={(c:number)=>{
          const r=bookRooms(rooms,c);
          if(!r) alert("Not enough rooms");
          else setRooms(r);
        }}
        onRandom={()=>setRooms(generateRooms(true))}
        onReset={()=>setRooms(generateRooms())}
      />
      <HotelGrid rooms={rooms} />
    </div>
  );
};

export default App;
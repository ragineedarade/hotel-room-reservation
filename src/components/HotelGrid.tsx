import Room from "./Room";
const HotelGrid = ({ rooms }: any) => {
  const grouped:any = {};
  rooms.forEach((r:any)=>{
    grouped[r.floor]=grouped[r.floor]||[];
    grouped[r.floor].push(r);
  });
  return (
    <div className="grid">
      {Object.keys(grouped).sort((a,b)=>+b-+a).map(f=>(
        <div key={f} className="floor">
          <b>Floor {f}</b>
          {grouped[f].map((r:any)=><Room key={r.roomNumber} room={r} />)}
        </div>
      ))}
    </div>
  );
};
export default HotelGrid;
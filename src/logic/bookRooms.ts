import { travelTime } from "./travelTime";
export const bookRooms = (rooms:any[],k:number)=>{
  const available=rooms.filter(r=>!r.occupied&&!r.booked);
  if(available.length<k) return null;
  let best=null, min=1e9;
  const byFloor:any={};
  available.forEach(r=>{
    byFloor[r.floor]=byFloor[r.floor]||[];
    byFloor[r.floor].push(r);
  });
  for(const f in byFloor){
    const arr=byFloor[f].sort((a:any,b:any)=>a.position-b.position);
    for(let i=0;i+k-1<arr.length;i++){
      const slice=arr.slice(i,i+k);
      const t=slice[k-1].position-slice[0].position;
      if(t<min){min=t;best=slice;}
    }
  }
  if(!best){
    const arr=[...available].sort((a,b)=>a.floor-b.floor||a.position-b.position);
    for(let i=0;i+k-1<arr.length;i++){
      const slice=arr.slice(i,i+k);
      const t=travelTime(slice[0],slice[k-1]);
      if(t<min){min=t;best=slice;}
    }
  }
  return rooms.map(r=>best?.some((b:any)=>b.roomNumber===r.roomNumber)?{...r,booked:true}:r);
};
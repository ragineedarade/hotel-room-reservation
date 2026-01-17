export const generateRooms = (random=false) => {
  const rooms:any[] = [];
  for(let f=1;f<=10;f++){
    const c=f===10?7:10;
    for(let i=1;i<=c;i++){
      rooms.push({
        roomNumber:f===10?1000+i:f*100+i,
        floor:f,
        position:i,
        occupied:random?Math.random()<0.3:false,
        booked:false
      });
    }
  }
  return rooms;
};
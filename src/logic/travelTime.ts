export const travelTime = (a:any,b:any)=>{
  return Math.abs(a.position-b.position)+Math.abs(a.floor-b.floor)*2;
};
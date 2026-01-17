const Room = ({ room }: any) => {
  const cls = room.booked ? "room booked" : room.occupied ? "room occupied" : "room available";
  return <div className={cls}>{room.roomNumber}</div>;
};
export default Room;
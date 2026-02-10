export const list = [
  {
    name: "BRADFORD, JIM",
    lastSeen: "20 min",
    bgc: "#FFD7D5",
    borderTop: "#D17A89",
    address: "PT RE-EVAL",
    time: "12:00 PM",
  },
  {
    name: "ADAMS, MARIE J",
    lastSeen: "20 min",
    bgc: "#C1D5F8",
    borderTop: "#6D91CE",
    address: "IMMUNIZATIONS ONLY",
    time: "12:15 PM",
  },

  {
    name: "CAMPBELL, LISA C",
    lastSeen: "15 min",
    bgc: "#FFE3CE",
    borderTop: "#CF8353",
    address: "WCC - 24 MOS",
    time: "1:30 PM",
  },
   {
    name: "HANSBERRY, BETTY",
    lastSeen: "30 min",
    bgc: "#D3D2FA",
    borderTop: "#8371B4",
    address: "CONSULTATION",
    time: "1:45 PM",
  },
  {
    name: "ADAMS, MARIE J",
    lastSeen: "20 min",
    bgc: "#C1D5F8",
    borderTop: "#6D91CE",
    address: "IMMUNIZATIONS ONLY",
    time: "12:15 PM",
  },

  {
    name: "CAMPBELL, LISA C",
    lastSeen: "15 min",
    bgc: "#FFE3CE",
    borderTop: "#CF8353",
    address: "WCC - 24 MOS",
    time: "1:30 PM",
  },
   {
    name: "ROBINSON, TRACIE",
    lastSeen: "30 min",
    bgc: "#EFD9FF",
    borderTop: "#B688F0",
    address: "MENTAL HEALTH EVAL",
    time: "2:15 PM",
  },
  {
    name: "HUGHES, JIM",
    lastSeen: "20 min",
    bgc: "#FECCCB",
    borderTop: "#E26464",
    address: "TELEMEDICINE",
    time: "2:30 PM",
  },

  {
    name: "STOLFUS, LINDSAY",
    lastSeen: "15 min",
    bgc: "#C7F6B2",
    borderTop: "#71974B",
    address: "TEST RESULTS",
    time: "3:00 PM",
  },
   {
    name: "JONES, BOB",
    lastSeen: "15 min",
    bgc: "#F9E9B5",
    borderTop: "#A39948",
    address: "FOLLOW UP",
    time: "3:15 PM",
  },
    {
    name: "BRADFORD, JIM",
    lastSeen: "20 min",
    bgc: "#FFD7D5",
    borderTop: "#D17A89",
    address: "PT RE-EVAL",
    time: "12:00 PM",
  },
  {
    name: "ADAMS, MARIE J",
    lastSeen: "20 min",
    bgc: "#C1D5F8",
    borderTop: "#6D91CE",
    address: "IMMUNIZATIONS ONLY",
    time: "12:15 PM",
  },

  {
    name: "CAMPBELL, LISA C",
    lastSeen: "15 min",
    bgc: "#FFE3CE",
    borderTop: "#CF8353",
    address: "WCC - 24 MOS",
    time: "1:30 PM",
  },
   {
    name: "HANSBERRY, BETTY",
    lastSeen: "30 min",
    bgc: "#D3D2FA",
    borderTop: "#8371B4",
    address: "CONSULTATION",
    time: "1:45 PM",
  },
  {
    name: "ADAMS, MARIE J",
    lastSeen: "20 min",
    bgc: "#C1D5F8",
    borderTop: "#6D91CE",
    address: "IMMUNIZATIONS ONLY",
    time: "12:15 PM",
  },

  {
    name: "CAMPBELL, LISA C",
    lastSeen: "15 min",
    bgc: "#FFE3CE",
    borderTop: "#CF8353",
    address: "WCC - 24 MOS",
    time: "1:30 PM",
  },
   {
    name: "ROBINSON, TRACIE",
    lastSeen: "30 min",
    bgc: "#EFD9FF",
    borderTop: "#B688F0",
    address: "MENTAL HEALTH EVAL",
    time: "2:15 PM",
  },
  {
    name: "HUGHES, JIM",
    lastSeen: "20 min",
    bgc: "#FECCCB",
    borderTop: "#E26464",
    address: "TELEMEDICINE",
    time: "2:30 PM",
  },

  {
    name: "STOLFUS, LINDSAY",
    lastSeen: "15 min",
    bgc: "#C7F6B2",
    borderTop: "#71974B",
    address: "TEST RESULTS",
    time: "3:00 PM",
  },
   {
    name: "JONES, BOB",
    lastSeen: "15 min",
    bgc: "#F9E9B5",
    borderTop: "#A39948",
    address: "FOLLOW UP",
    time: "3:15 PM",
  },
];
const NavCards = () => {
  return (
    <div className="flex flex-col gap-1">
      {list.map((item, index) => (
        <div
          key={index}
          className="flex py-2 flex-col w-full text-xs shadow-sm px-2 transition-all hover:font-bold cursor-pointer"
          style={{
            backgroundColor: item.bgc,
            borderTop: `3px solid ${item.borderTop}`,
          }}
        >
          {/* Name + last seen */}
          <div className="flex justify-between text-gray-800">
            <span className="font-semibold text-lg">{item.name}</span>
            <span>{item.lastSeen}</span>
          </div>

          {/* Address + time */}
          <div className="flex justify-between w-full italic mt-1">
            <div className="">{item.address}</div>
            <div className="">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default NavCards;

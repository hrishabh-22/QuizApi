// import React, { useState, useEffect } from "react";
// import { fetchData } from "./ApiCalls";

// const App = () => {
//   const [load, setLoad] = useState("");
//   const [error, setError] = useState("");
//   const [btnPress, setBtnPress] = useState(true);

//   const loadData = () => {
//     fetchData()
//       .then((data) => {
//         if (data.error) {
//           setError(data.error);
//           console.error(error);
//         } else {
//           setLoad(data);
//         }
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     loadData();
//   }, [btnPress]);

//   const btnClicked = () => {
//     setBtnPress(!btnPress);
//   };

//   return (
//     <>
//       <button onClick={btnClicked}>ClickMe!</button>
//       {load.length === 0 ? (
//         <div>
//           <p>No Questions to display</p>
//         </div>
//       ) : (
//         <div>
//           <p>We can display</p>
//           {console.log(load)}
//         </div>
//       )}
//     </>
//   );
// };
// export default App;

import React from "react";
import Questions from "./container/Questions";

const App = () => {
  return (
    <div style={{marginTop: '10%'}}>
      <center>
        <Questions />
      </center>
    </div>
  );
};

export default App;

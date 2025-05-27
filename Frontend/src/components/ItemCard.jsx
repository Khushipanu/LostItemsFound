// import { useState ,useEffect} from "react";
// import { api } from "../config";
// import noImage from "../assets/no-image.png"
// import axios from "axios";


// export default function Itemcard(props) {
//   const [image, setImage] = useState(noImage);
//   useEffect(() => {
//     axios
//       .get(`${api}/files/${props.image}`)
//       .then((res) => {
//         setImage(`${api}/files/${props.image}`);
//       })
//       .catch((error) => {
//         setImage(noImage);
//       });


//   },[props.image]);


//   return (
//     <a href={"/find/details/" + props.id} data-aos="fade-up">
//       <div className="card">
//         <div className="card-img">
//           <img
//             src={image}
//             alt=""
//           />
//         </div>
//         <div className="card-desc">
//           <h2>{props.title}</h2>
//           <p>{props.description}</p>
//         </div>
//       </div>
//     </a>
//   );
// }
//
// import { useState, useEffect } from "react";
// import { api } from "../config";
// import noImage from "../assets/no-image.png";
// import axios from "axios";

// export default function Itemcard(props) {
//   const [image, setImage] = useState(noImage);

//   useEffect(() => {
//     axios
//       .get(`${api}/files/${props.image}`)
//       .then(() => {
//         setImage(`${api}/files/${props.image}`);
//       })
//       .catch(() => {
//         setImage(noImage);
//       });
//   }, [props.image]);

//   return (
//     <div className="card-container" data-aos="fade-up">
//       <a href={`/find/details/${props.id}`} className="card-link">
//         <div className="card">
//           <div className="card-img">
//             <img src={image} alt={props.title} />
//           </div>
//           <div className="card-desc">
//             <h2>{props.title}</h2>
//             <p>{props.description}</p>
//           </div>
//         </div>
//       </a>

//       {props.onDelete && (
//         <button
//           className="delete-button"
//           onClick={() => {
//             if (window.confirm("Are you sure you want to delete this item?")) {
//               props.onDelete(props.id);
//             }
//           }}
//         >
//           Delete
//         </button>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import { api } from "../config";
import noImage from "../assets/no-image.png";
import axios from "axios";

export default function Itemcard(props) {
  const [image, setImage] = useState(noImage);

  useEffect(() => {
    axios
      .get(`${api}/files/${props.image}`)
      .then(() => {
        setImage(`${api}/files/${props.image}`);
      })
      .catch(() => {
        setImage(noImage);
      });
  }, [props.image]);

  return (
    <div className="card" data-aos="fade-up">
      <a href={`/find/details/${props.id}`} className="card-link" style={{ textDecoration: "none", color: "inherit" }}>
        <div className="card-img">
          <img src={image} alt={props.title} />
        </div>
        <div className="card-desc">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </a>

      {props.onDelete && (
        <div className="card-actions">
          <button
            className="delete-button"
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this item?")) {
                props.onDelete(props.id);
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

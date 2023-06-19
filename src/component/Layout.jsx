// import React,{useState} from 'react'

// export default function Layout(props) {
//     const [search, setSearch] = useState("");
//     const [add,setAdd] = useState([])
//     console.log(search);
   
//   return (
//     <div>
//         <input type="text"  onInput={(e)=>{
//             setSearch(e.target.value)
//         }}/>
//         <button onClick={()=>{
//             setAdd(add.push(search))
//             // console.log(add);
//         }}>add</button>
        
//         {/* <div>{add.map((value,index)=>{
//             return <p key={index}>{value}</p>
//         })}</div> */}
//     </div>
//   )
// }

// import React, { useState } from 'react';
// export default function Layout(props) {
//   const [search, setSearch] = useState("Á");
//   const [add, setAdd] = useState([]);
//   return (
//     <div>
//       <input
//         type="text"
//         value={search}
//         onChange={(e) => {
//           setSearch(e.target.value);
//         }}
//       />
//       <button
//         onClick={() => {
//           setAdd([...add, search]);
//           setSearch("");
//         }}
//       >
//         Add
//       </button>

//       <div>
//         {add.map((value, index) => (
//           <p key={index}>
//             <span>{value}  </span>
//             <span onClick={()=>add.splice(index,1)}>delete</span>
//             {/* <span>{value}</span> */}
//             </p>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import './Navbar.scss';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Layout(props) {
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState([]);
  const [isTextDeco, setIsTextDeco] = useState(true);
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleDelete = (index) => {
    const updatedAdd = [...add];
    updatedAdd.splice(index, 1);
    setAdd(updatedAdd);
  };

  const toggleTextDeco = () => {
    setIsTextDeco(!isTextDeco);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditValue(add[index]);
  };

  const saveEdit = () => {
    const updatedAdd = [...add];
    updatedAdd[editIndex] = editValue;
    setAdd(updatedAdd);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setAdd([...add, search]);
          setSearch("");
        }}
        style={{ backgroundColor: 'blue', color: 'white' }}
      >
        Add
      </button>

      <div>
        {add.map((value, index) => (
          <p key={index}>
            <input type="checkbox" onClick={toggleTextDeco} />
            {editIndex === index ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            ) : (
              <span className={isTextDeco ? 'text-Deco' : ''}>{value}</span>
            )}
            <button onClick={() => handleDelete(index)} style={{ backgroundColor: 'blue', color: 'white' }}>
              delete
            </button>
            {editIndex === index ? (
              <button onClick={saveEdit}>save</button>
            ) : (
              <button onClick={() => handleEdit(index)}>edit</button>
            )}
          </p>
        ))}
      </div>
    </div>
  );
}

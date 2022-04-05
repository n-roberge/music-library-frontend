// import axios from "axios";
// import React from 'react';
// import {Table, Container} from 'react-bootstrap';
// import GetMusic from "../GetMusic/GetMusic";

// const SongTable = (props) => {

//     const [music, setMusic] = useState();

//     async function makeGetRequest(){
//         try {
//             let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music/');
//             let musicArrays = response.data;
//             setState(musicArrays);
//         }
//         catch (ex){
//             console.log('Error in API call')
//         }
//     }

//     return (  
//         <Container className="songList">
//             <Table striped bordered hover variant = "dark" >
//                 <thead>
//                     <tr >
//                         <th className="songCells">ID</th>
//                         <th className="songCells">Title</th>
//                         <th className="songCells">Album</th>
//                         <th className="songCells">Artist</th>
//                         <th className="songCells">Genre</th>
//                         <th className="songCells">Release Date</th>
//                     </tr>
//                 </thead>
//                 {/* <tbody>
//                     {music.map((item)=>(
//                     <tr key = {item.id}>
//                         {Object.values(item).map((val) =>(
//                             <td>{val}</td>
//                         ))}
//                     </tr>
//                     ))}
//                 </tbody> */}
//             </Table>
//         </Container>  
//     );   
// };

 
// export default SongTable;
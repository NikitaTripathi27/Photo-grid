import { Typography  ,Card ,CardContent ,CardMedia} from "@mui/material";
import {useParams} from "react-router-dom"
import { useState ,useEffect } from "react";
import axios from "axios"
import "./Details.css"
const Details = () => {
    const params = useParams();
    const [ images ,setimages] = useState({})
    const displayImage = async(id)=>{
        try {
            const result = await axios.get(`https://randomuser.me/api/?login/uuid=${id}`);
           
            console.log(result.data.results,"d")
            setimages(result.data.results);
            
          } catch (err) {
            console.log(err);
          }
    }
    useEffect(()=>{
        displayImage()
    },[params.id])
    console.log(params.id)
    console.log(images)
    return ( 
        <>
        {images.length > 0 && images.map((item)=>(
             <Card className="photo-card">
             <CardMedia 
                className="media"
             height="700"
             width="500"
             image ={item.picture.large} />
               <CardContent >
               <Typography>{item.name.title} {item.name.first} {item.name.last}</Typography>
               </CardContent>
           </Card>
        ))}
       
        </>
     );
}
 
export default Details;
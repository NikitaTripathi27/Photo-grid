import { useEffect ,useState } from "react";
import {CardMedia, Grid ,Card ,CardContent ,Typography} from "@mui/material"
import { useNavigate } from "react-router-dom";
const Images = () => {
    // const navigate = useNavigate()
    const[imageArray ,setimageArray] = useState([])
    const [page,setpage] = useState(0)
    const [loading ,setloading] =useState(true)
     const navigate = useNavigate()
    const getImagesAPI =async(limit=30)=>{
       
      setloading(true)
        try {
            const results = await fetch(
              `https://randomuser.me/api/?results=${limit}`
            );
            const data = await results.json();
            setimageArray((prev) => [...prev, ...data.results]);
            setloading(false)
          } catch (err) {
            console.log(err);
          }

    }

    const handleScroll =()=>{
        if(window.innerHeight+document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
            setpage((prev)=>prev + 1 )
        }
    }
    useEffect (()=>{
        getImagesAPI()
    },[page])

    useEffect(()=>{
        window.addEventListener('scroll' ,handleScroll);

        return ()=>{
            window.removeEventListener("scroll" ,handleScroll)
        }
    },[])

    const handleClick =(id)=>{
        navigate(`/uuid/${id}`)
      
    }
    console.log(imageArray)
    return ( 
        <>
            <Grid container>
               {imageArray.map((item) => (
                <Grid sm={12} md={6} lg={12/5} padding={2.5}>
                    <Card className="card-dimension" onClick={()=>handleClick(item.login.uuid)}>
                        <CardMedia
                         component="img"
                        height="240"
                        image={item.picture.medium}
                         />
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {item.name.title} {item.name.first} {item.name.last}
                            </Typography>
                            </CardContent>
                    </Card>
                    </Grid>
               ))}
                </Grid>  
                {loading && (
                    <>
                    <div className="load">
                        Loading...
                    </div>
                    </>
                )}
              
        </>
     );
}
 
export default Images;
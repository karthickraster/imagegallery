import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ImageCard.css'
import Stack from '@mui/material/Stack';


const ImageCard = () => {

    const [image, setImage] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(response => response.json())
            .then(data => { setImage(data.meals) })
            .catch(error => console.log(`Error is`, error))

    }, [])


    return (

        <>
            <Stack spacing={{ xs: 1, sm: 2  }} columns={{ xs: 1, sm: 2, md: 3 }} direction="row" useFlexGap flexWrap="wrap" 
  >
            {image.map(item => {

                return (
                    
                    <Card sx={{ width: 285, display: 'flex'}} key={item.idMeal} >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="250"
                                image={item.strMealThumb}
                                alt="green iguana"
                            />
                            
                            <CardContent>
                                <Typography gutterBottom variant="p" component="div">
                                {item.strMeal}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                   
                )
            })
            }
             </Stack>
        </>
    );
}

export default ImageCard
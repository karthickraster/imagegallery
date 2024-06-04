import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ImageCard.css'



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
            <div className='card-container'>
            {image.map(item => {

                return (
                    
                    <Card sx={{ maxWidth: 345, display: 'flex'}} key={item.idMeal}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                width="300"
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
            </div>
        </>
    );
}

export default ImageCard
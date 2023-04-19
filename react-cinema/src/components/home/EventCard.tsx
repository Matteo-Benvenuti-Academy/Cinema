import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Event } from '../../interfaces/event.interface';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  event : Event
}

export default function EventCard({event}:CardProps) {
  const imgLink: string= "https://secure.webtic.it/angwt/";
  
  const navigate = useNavigate()

  const details = () =>{
    console.log(event.EventId)
    navigate("/detail/" + event.EventId)
  } 

  return (
    <Card onClick={details} sx={{ maxWidth: 345, objectFit: "contain"}} style={{margin: 20, width:150, height:300}}>
      <CardMedia
        sx={{width:150 , height:300}}
        image={imgLink + event?.Picture}
        title={event.Title}
      />
      <CardContent>
      </CardContent>
    </Card>
  );
}
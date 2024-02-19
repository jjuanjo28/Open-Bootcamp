
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({personaje}) {

  return (
    <Card sx={{ maxWidth: 345, margin:"10px" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={personaje.image}
        title={personaje.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         Nombre: {personaje.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Estado: {personaje.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Episodios que participó : {personaje.episode.length + 1}
        </Typography>
        </CardContent>
     </Card>
  );
}





import React from 'react';
import {Card, CardContent, CardHeader, CardMedia, Grid, styled} from '@mui/material';


const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: '56.25%',
});

interface Props {
  id: string
  author: string;
  message: string;
  image: string | null;
}

const ProductItem: React.FC<Props> = ({id,author, message, image}) => {
  const baseURL = 'http://localhost:8000';

  let cardImage;

  if (image) {
    cardImage = `${baseURL}/${image}`;
  }

  return (
    <Grid item sx={{width: '300px'}} key={id}>
      <Card sx={{height: '100%'}}>
        <CardHeader title={author}/>
        <CardContent>
          <strong>{message}</strong>
        </CardContent>
        <ImageCardMedia image={cardImage}/>
      </Card>
    </Grid>
  );
};

export default ProductItem;

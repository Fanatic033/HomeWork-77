import React from 'react';
import {Avatar, Card, CardContent, CardHeader, CardMedia, Grid, styled} from '@mui/material';

const ImageCardMedia = styled(CardMedia)({
  component: 'img',
  height: '194px',
  paddingTop: '56.25%',
});

interface Props {
  id: string;
  author: string;
  message: string;
  image: string | null;
}

const ProductItem: React.FC<Props> = ({id, author, message, image}) => {
  const baseURL = 'http://localhost:8000';

  return (
    <Grid item sx={{width: '300px'}} key={id}>
      <Card sx={{height: '100%',padding: '10px'}} variant="outlined">
        <CardHeader
          avatar={
            <Avatar sx={{ bgColor: 'red' }} aria-label="recipe">
              {author[0]}
            </Avatar>
          }
          title={author ? author : 'Аноним' }
        />
        <CardContent>
          <strong>{message}</strong>
        </CardContent>
        {image && (
          <ImageCardMedia
            image={`${baseURL}/${image}`}
          />
        )}
      </Card>
    </Grid>
  );
};

export default ProductItem;

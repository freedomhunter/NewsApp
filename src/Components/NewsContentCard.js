import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';

export const NewsContentCard = ({data:{urlToImage='', title='', content='', description=''} = {}}) => {
  return (
    <Card className="modalBase">
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="100%"
          image={urlToImage}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              <strong>Description</strong> - {description || '---No Description---'} <br/><br/>
              <strong>Content</strong> - {content || '---No Content---'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Divider, IconButton, Typography } from '@material-ui/core';
import {Visibility as VisibilityIcon, Description as DescriptionIcon} from '@material-ui/icons';

import {formatDateTime} from '../Utils/newsUtils'

export const NewsCard = (props) => {
    const {author='', description='', publishedAt='', source:{name=''} = {}, title='', url='', urlToImage=''} = props.data
    return(
    <List className='listRoot'>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar alt={title} src={urlToImage} />
            </ListItemAvatar>
            <ListItemText
                primary={title}  
                secondary={
                    <Typography
                        component="h6"
                        variant="caption"
                        align="right"
                        color="primary"
                    >
                        {'By :- '+name}<br/>
                        {formatDateTime(publishedAt)}
                    </Typography>
                }
            />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
            <ListItemText
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        style={{display:'inline'}}
                        color="textPrimary"
                    >
                        {author ? author+' — ' : null}
                    </Typography>
                    {description || '--No Description--'}
                </React.Fragment>
            }
            />
        </ListItem>
        <div className="newsCardFooter">
            <IconButton href={url} target='blank' color="primary">
                <VisibilityIcon />
            </IconButton>
            <IconButton color="secondary" onClick={() => props.handleNewsSelect(props.data)}>
                <DescriptionIcon />
            </IconButton>
        </div>
    </List>
    )
}
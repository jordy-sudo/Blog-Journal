import { TurnedInNot } from '@mui/icons-material';
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal/journalSlice';

export const ItemSidebar = ({title,body,date,id,imageUrls=[]}) => {
    const dispatch = useDispatch();
    const newTitle=useMemo(()=>{
        return title.length>17 
        ?title.substring(0,17)+'...'
        :title;
    },[title]);
    const ActiveNote = ()=>{
        dispatch(setActiveNote({title,body,date,id,imageUrls}));
    }
  return (
    <ListItem >
    <ListItemButton onClick={ActiveNote}>
        <ListItemIcon>
            <TurnedInNot/>
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={newTitle}/>
            <ListItemText secondary={body}/>
        </Grid>
    </ListItemButton>
</ListItem>
  )
}

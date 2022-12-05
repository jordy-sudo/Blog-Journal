import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { ItemSidebar } from "./ItemSidebar"

export const Sidebar = ({drawerWidth=240}) => {
    const {email} =useSelector(state=>state.auth);
    const {notes} = useSelector(state=>state.journal);
  return (
    <Box
    component='nav'
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
        <Drawer
            variant='permanent' // temporary
            open
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography>{email}</Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    notes.map(note=>(
                       <ItemSidebar key={note.id} {...note}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}

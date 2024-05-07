import { Inbox } from "@mui/icons-material";
import { Avatar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";


export default function List_com() {
    return (
        <>
            <List className="bg-white">
                <ListItem  >
                    <ListItemButton className="bg-red-500 
                hover:bg-red-400 ">
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <ListItem>
                    <ListItemButton
                        className="bg-green-500 
                hover:bg-green-400 ">
                        <ListItemIcon>
                            <Inbox />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemButton
                        className="bg-yellow-500 
                hover:bg-yellow-400 ">
                        <ListItemIcon>
                            <Avatar className="bg-green-500" >K</Avatar>
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}


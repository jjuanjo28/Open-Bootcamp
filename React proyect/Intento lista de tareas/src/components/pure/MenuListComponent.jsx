import { List,ListItem,ListItemIcon, ListItemText} from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from "react-router-dom"
const getIcon = (icon) => {
    switch (icon) {
        case "HOME":
            return (<HomeIcon/>)
        case "TASK":
            return(<AddTaskIcon/>)
        case "SETTINGS":
            return (<SettingsIcon/>)        
         
    
        default:
            return (<HomeIcon/>)
            
    }
}

const MenuListItem = ({list}) => {
    const navigate = useNavigate()
    const goTo = (path) => {
        navigate(path)
    }
    return (
        <List>
            {list.map(({text, path, icon}, index)=>(
                <ListItem key={index} ButtonBase onClick={()=>goTo(path)}>

                <ListItemIcon>
                    {getIcon(icon)}
                </ListItemIcon>
                <ListItemText
                   primary={text}
                >

                </ListItemText>

                </ListItem>
            ))}
        </List>
    )

}
export default MenuListItem
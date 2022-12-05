import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layouts/JournalLayout";
import {  NoteView, NothingSelected } from "../views";

export const JournalPage = () => {
  const dispatch = useDispatch();
  const {isSaving,active}=useSelector(state=>state.journal);
  const createNewNote=()=>{
      dispatch(startNewNote());
  }
  return (
    <JournalLayout>
      {!active ? 
        <NothingSelected/>
        :
        <NoteView/>
      }
      
      <IconButton
        onClick={createNewNote}
        size="large"
        sx={{
          color:"white",
          backgroundColor:"error.main",
          ':hover':{backgroundColor:"error.main", opacity:0.9},
          position:"fixed",
          right:50,
          bottom:10,
          display: isSaving === false ? '' : 'none'
        }
      }
      >
        <AddOutlined sx={{fontSize:30}}/>
      </IconButton>
    </JournalLayout>
  )
}

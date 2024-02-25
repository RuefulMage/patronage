import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import {withStyles} from "@mui/styles";
import ClassForm from "@/components/ClassForm";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import AddClassDialog from "@/components/AddClassDialog";


const ClassesForm = ({classes}) => {
    const [schoolClasses, setSchoolClasses] = useState([]);
    const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

    return (
        <div>
            <Button variant="outlined" onClick={() => setIsAddDialogOpen(true)}>Добавить класс</Button>

            <AddClassDialog
                isOpen={isAddDialogOpen}
                onSave={() => setIsAddDialogOpen(false)}
                onCancel={() => setIsAddDialogOpen(false)}
            />

            {
                schoolClasses.map(classData => (
                    <div key={classData.id}>
                        <ClassForm />
                    </div>
                ))
            }
        </div>
    );
};

const styles = {
    textArea: {
        width: '300px',
        borderRadius: '10px',
        padding: '12px',
        margin: '10px 0',

        '&:hover': {
            borderColor: 'rgb(51, 153, 255)',
        },

        '&:focus': {
            outline: 0,
            borderColor: 'rgb(51, 153, 255)',
            boxShadow: 'rgb(182, 218, 255) 0px 0px 0px 3px'
        }
    }
};

export default withStyles(styles)(ClassesForm);
import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';


const AddClassDialog = ({classes, onCancel, onSave, isOpen}) => {
    const [studentsList, setStudentsList] = useState([]);
    const [className, setClassName] = useState('');

    const isSaveButtonDisabled = className.length === 0 || studentsList.length === 0;
    return (
        <Dialog
            open={isOpen}
            keepMounted
            onClose={() => {}}
        >
            <DialogTitle>{"Добавить класс"}</DialogTitle>
            <DialogContent>
                <div className={classes.contentWrapper}>
                    <TextField
                        label="Имя класса"
                        type="text"
                    />
                    <TextareaAutosize
                        minRows={20}
                        placeholder="Введите список класса, на каждой строке по одному ученику"
                        className={classes.textArea}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>Отменить</Button>
                <Button disabled={isSaveButtonDisabled} variant="contained" onClick={onSave}>Сохранить</Button>
            </DialogActions>
        </Dialog>
    );
};

const styles = {
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0',
    },
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
    },
};

export default withStyles(styles)(AddClassDialog);
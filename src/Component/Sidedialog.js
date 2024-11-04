import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogContent,
  DialogBody,
  DialogActions,
  Button,
  Input,
  Label,
  makeStyles,
} from "@fluentui/react-components";
import { PrimaryButton } from "@fluentui/react";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "column",
    rowGap: "15px", // Increased gap for better spacing
    maxHeight: '70vh',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  dialogSurface: {
    position: 'fixed',
    top: '7%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    width: '30%',
    maxHeight: '90%',
    overflowY: 'auto',
    zIndex: 1000,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px', // Spacing between label and input
  },
  formbutton: {
    marginTop: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    width: '100%', // Full width for inputs
  },
});

const Sidedialog = React.memo(({ formTitle, inputs, formValues, handleChange, handleSubmit }) => {
  const styles = useStyles();

  return (
    <Dialog modalType="non-modal">
      <DialogTrigger disableButtonEnhancement>
        <PrimaryButton className="newbutton">+Add</PrimaryButton>
      </DialogTrigger>
      <DialogSurface className={styles.dialogSurface}>
        <form onSubmit={handleSubmit}>
          <DialogBody>
            <DialogTitle>{formTitle}</DialogTitle>
            <DialogContent className={styles.content}>
              {inputs.map((inp, ind) => (
                <div key={ind} className={styles.formGroup}>
                  <Label required={inp.required}>{inp.label}</Label>
                  <Input 
                    className={styles.input}
                    required={inp.required} 
                    type={inp.type} 
                    name={inp.name}
                    value={formValues[inp.name] || ''} 
                    onChange={handleChange} 
                  />
                </div>
              ))}
            </DialogContent>
          </DialogBody>
          <DialogActions className={styles.formbutton}>
            <DialogTrigger disableButtonEnhancement>
              <Button appearance="secondary">Close</Button>
            </DialogTrigger>
            <PrimaryButton type="submit" appearance="primary">
              Submit
            </PrimaryButton>
          </DialogActions>
        </form>
      </DialogSurface>
    </Dialog>
  );
});

export default Sidedialog;

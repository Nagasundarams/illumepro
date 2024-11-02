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
    rowGap: "10px",
    maxHeight: '70vh', // Control height for scrolling
    overflowY: 'scroll', // Enable vertical scrolling
    // Applying scrollbar hide styles directly in the class
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Safari and Chrome
    },
  },
  dialogSurface: {
    position: 'fixed',
    top: '7%', // Center vertically
    left: '55%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center in viewport
    backgroundColor: '#ffd8d8',
    width: '80%',
    maxHeight: '90%', // Limit height
    overflowY: 'auto', // Allow scrolling if content exceeds max height
    zIndex: 1000,
    // Hiding the scrollbar for webkit browsers
    '&::-webkit-scrollbar': {
      display: 'none', // Hide the scrollbar
    },
  }
});

const MainContent = React.memo(({ formTitle, inputs, formValues, handleChange, handleSubmit }) => {
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
                <div key={ind}>
                  <Label required={inp.required}>{inp.label}</Label>
                  <Input 
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
          <DialogActions>
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

export default MainContent;

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from "@material-tailwind/react";

export default function MessageDialog(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <div
      // class="grid place-items-center fixed w-screen h-screen bg-black bg-opacity-60 backdrop-blur-sm"
      // data-projection-id="1"
      // style="opacity: 1;"
      >
        <Button onClick={handleOpen} variant="gradient">
          {props.btnName}
        </Button>
        <Dialog
          className=" h-fit  w-fit "
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 }
          }}>
          <DialogHeader>{props.title}</DialogHeader>
          <DialogBody>{props.body}</DialogBody>
          <DialogFooter>
            <Button variant="gradient" color="green" onClick={handleOpen}>
              <span>OK</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </Fragment>
  );
}

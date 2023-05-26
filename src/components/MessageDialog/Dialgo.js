// import { Fragment, useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function MessageDialog(props) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // const [open, setOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  // const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className=" rounded-lg bg-clip-border bg-gradient-to-tr from-mainColor to-alterColor px-4 py-2 text-[16px] font-medium text-white hover:scale-105 transition-all duration-500 shadow-lg shadow-alterColor/50 hover:shadow-lg hover:shadow-alterColor/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {props.btnName}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[10000]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-[0.5] -z-20" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-clip-border bg-gradient-to-tr from-mainColor to-alterColor p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className=" text-white text-lg font-medium leading-6 "
                  >
                    {props.title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className=" text-white text-sm ">{props.body}</p>
                  </div>

                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="  inline-flex justify-center rounded-md   bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600 transition-transform duration-[0.3s] hover:scale-105 hover:bg-gradient-to-tr hover:from-gradientFrom hover:to-gradientTo hover:shadow-md hover:shadow-green-500/50 shadow-md shadow-blue-200/50  hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Ok
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
    // <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
    //   <Dialog.Panel>
    //     <Dialog.Title>Deactivate account</Dialog.Title>
    //     <Dialog.Description>
    //       This will permanently deactivate your account
    //     </Dialog.Description>

    //     <p>
    //       Are you sure you want to deactivate your account? All of your data
    //       will be permanently removed. This action cannot be undone.
    //     </p>

    //     <button onClick={() => setIsOpen(false)}>Deactivate</button>
    //     <button onClick={() => setIsOpen(false)}>Cancel</button>
    //   </Dialog.Panel>
    // </Dialog>

    // <Fragment>
    //   <div>
    //     <Button className=" " onClick={handleOpen} variant="gradient">
    //       {props.btnName}
    //     </Button>
    //     <Dialog
    //       className=" h-fit  w-fit  "
    //       open={open}
    //       handler={handleOpen}
    //       animate={{
    //         mount: { scale: 1, y: 0 },
    //         unmount: { scale: 0.9, y: -100 },
    //       }}
    //     >
    //       <DialogHeader>{props.title}</DialogHeader>
    //       <DialogBody>{props.body}</DialogBody>
    //       <DialogFooter>
    //         <Button variant="gradient" color="green" onClick={handleOpen}>
    //           <span>OK</span>
    //         </Button>
    //       </DialogFooter>
    //     </Dialog>
    //   </div>
    // </Fragment>
  );
}

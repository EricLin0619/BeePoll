import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { createProposal } from "../../services/contractApi/contract";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useState } from 'react';

export default function VoteButton() {
  const [open, setOpen] = useState(false);
  const [endTime, setEndTime] = useState<number>(0);
  const [content, setContent] = useState<string>('');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEndTimeChange = (event: any) => {
    const datetime = new Date(event)
    const currentTime = new Date();
    const timestamp = Math.floor((datetime.getTime() - currentTime.getTime()) / 1000);
    setEndTime(timestamp);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };


  return (
    <div className="ml-auto">
      <button
        className="btn btn-outline h-1/3 btn-warning px-2"
        onClick={handleOpen}
      >
        New Vote
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className='z-10'
      >
        <Box >
          <form method="dialog" className="modal-box fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h3 className="font-bold text-lg text-white">Create your proposal</h3>
            <div className="mt-2">
              <DateTimePicker
                label="End Time"
                className="z-50 text-white"
                onChange={handleEndTimeChange}
                sx={{
                  width: "100%",
                  "& input": { color: "white" },
                  /* Change the border color of the outlined input */
                  ".MuiOutlinedInput-root.MuiInputBase-formControl .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white" /* Replace with your desired border color */
                  },

                  /* Change the label color */
                  ".MuiInputLabel-root.MuiInputLabel-formControl": {
                    color: "white"/* Replace with your desired label color */
                  },

                  ".MuiSvgIcon-root": {
                    fill: "white"
                  }

                }}
              />
              <input
                type="text"
                placeholder="Content"
                style={{ color: "white", borderColor: "white" }}
                className="input input-bordered w-full my-4"
                onChange={handleContentChange}
              />
              {/* <input
                                type="text"
                                placeholder="End time"
                                className="input input-bordered w-full my-4"
                            /> */}
              <button
                className="btn btn-outline btn-success mb-2 mt-4 btn-warning px-2"
                onClick={() => {
                  console.log("content", content)
                  console.log("endTime", endTime)
                  createProposal(content, endTime);
                }}
              >
                CREATE
              </button>

            </div>
            {/* <DateTimePickerModal /> */}

          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>

        </Box>
      </Modal>
    </div>
  );
}

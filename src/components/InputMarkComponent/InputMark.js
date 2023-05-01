import * as React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "green",
    borderWidth: 2,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 6,
    padding: "4px !important", // override inline-style
  },
});

const InputMark = (props) => {
  const handleChange = (e) => {
    props.setmark(e.target.value);
    props.onChangeMark(e);
  };
  return (
    <div>
      <Box
        className="w-40"
        component="form"
        noValidate
        // sx={{
        //   display: "grid",
        //   gap: 2,
        // }}
      >
        <ValidationTextField
          onBlur={props.onChangeRate}
          type="number"
          label="Enter Mark"
          required
          variant="outlined"
          defaultValue=""
          id="validation-outlined-input"
          value={props.mark}
          onChange={handleChange}
        />
      </Box>
    </div>
  );
};

export default InputMark;

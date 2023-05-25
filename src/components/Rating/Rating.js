import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const RatingComp = (props) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  React.useEffect(() => {
    if (!props.isChanged) {
      setValue(2);
    } else {
      if (props.mark && props.mark !== "") {
        if (props.mark < 50) {
          setValue(2);
          props.setrating(2);
        } else if (props.mark >= 50 && props.mark < 80) {
          setValue(3);
          props.setrating(3);
        } else if (props.mark >= 80 && props.mark < 90) {
          setValue(4);
          props.setrating(4);
        } else {
          setValue(5);
          props.setrating(5);
        }
      }
    }
    if (props.rate) {
      setValue(props.rate || 0);
    }
    if (props.star) {
      setValue(props.star || 0);
    }
  }, [props]);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center"
      }}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          if (props.mark && props.mark !== "") {
            props.setValue(value);
          } else {
            props.onChangeRatng(event, newValue);

            setValue(newValue);
            props.setrating(newValue);
          }
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};
export default RatingComp;

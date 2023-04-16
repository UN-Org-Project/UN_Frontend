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
      setValue(props.rate);
    }
    if (props.star) {
      setValue(props.star);
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
            console.log(value);
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

  //   return (
  //     // <ul className="flex justify-center">
  //     //   <li>
  //     //     <svg
  //     //       xmlns="http://www.w3.org/2000/svg"
  //     //       viewBox="0 0 24 24"
  //     //       fill="currentColor"
  //     //       className="mr-1 h-5 w-5 text-yellow-300"
  //     //     >
  //     //       <path
  //     //         fillRule="evenodd"
  //     //         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  //     //         clipRule="evenodd"
  //     //       />
  //     //     </svg>
  //     //   </li>
  //     //   <li>
  //     //     <svg
  //     //       xmlns="http://www.w3.org/2000/svg"
  //     //       viewBox="0 0 24 24"
  //     //       fill="currentColor"
  //     //       className="mr-1 h-5 w-5 text-yellow-300"
  //     //     >
  //     //       <path
  //     //         fillRule="evenodd"
  //     //         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  //     //         clipRule="evenodd"
  //     //       />
  //     //     </svg>
  //     //   </li>
  //     //   <li>
  //     //     <svg
  //     //       xmlns="http://www.w3.org/2000/svg"
  //     //       viewBox="0 0 24 24"
  //     //       fill="currentColor"
  //     //       className="mr-1 h-5 w-5 text-yellow-300"
  //     //     >
  //     //       <path
  //     //         fillRule="evenodd"
  //     //         d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
  //     //         clipRule="evenodd"
  //     //       />
  //     //     </svg>
  //     //   </li>
  //     //   <li>
  //     //     <svg
  //     //       xmlns="http://www.w3.org/2000/svg"
  //     //       fill="none"
  //     //       viewBox="0 0 24 24"
  //     //       strokeWidth="1.5"
  //     //       stroke="currentColor"
  //     //       className="mr-1 h-5 w-5 text-yellow-300"
  //     //     >
  //     //       <path
  //     //         strokeLinecap="round"
  //     //         strokeLinejoin="round"
  //     //         d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
  //     //       />
  //     //     </svg>
  //     //   </li>
  //     //   <li>
  //     //     <svg
  //     //       xmlns="http://www.w3.org/2000/svg"
  //     //       fill="none"
  //     //       viewBox="0 0 24 24"
  //     //       strokeWidth="1.5"
  //     //       stroke="currentColor"
  //     //       className="mr-1 h-5 w-5 text-yellow-300"
  //     //     >
  //     //       <path
  //     //         strokeLinecap="round"
  //     //         strokeLinejoin="round"
  //     //         d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
  //     //       />
  //     //     </svg>
  //     //   </li>
  //     // </ul>
  // <Rating
  //   name="hover-feedback"
  //   value={value}
  //   precision={0.5}
  //   getLabelText={getLabelText}
  //   onChange={(event, newValue) => {
  //     setValue(newValue);
  //   }}
  //   onChangeActive={(event, newHover) => {
  //     setHover(newHover);
  //   }}
  //   emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
  // />
  // );
  // {value !== null && (
  //   <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
  // )}
  // };
};
export default RatingComp;

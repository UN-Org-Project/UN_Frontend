import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const Progress = (props) => {
  return (
    <div className=" w-1/3">
      <CircularProgressbar
        value={props.percentage}
        text={`${props.percentage}%`}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgba(30 ,136 ,229, ${props.percentage / 100})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center"
          },
          // Customize the circle behind the path, i.e. the "total progress"
          trail: {
            // Trail color
            stroke: "rgb(255 255 255)",
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Rotate the trail
            transform: "rotate(0.25turn)",
            transformOrigin: "center center"
          },
          // Customize the text
          text: {
            // Text color
            fill: "white",
            // Text size
            fontSize: "16px"
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "rgb(255 255 255)"
          }
        }}
      />
    </div>
  );
};

export default Progress;

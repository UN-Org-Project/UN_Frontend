import React, { useState } from "react";
import Rating from "../../Rating/Rating";
import Avatar from "@mui/material/Avatar";
import RatingComp from "../../Rating/Rating";
import InputMark from "../../InputMarkComponent/InputMark";
import { ParentAvatar } from "../../../components/assets";
//import DirectChatPage from "../../../Pages/chatting/chat";

const DashboardRow = (props) => {
  const [rating, setrating] = useState(2);
  const [comment, setComment] = useState("");
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [checkedabsence, setcheckedabsence] = useState(false);
  const [checkedpresent, setcheckedpresent] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [color, setcolor] = useState("");
  //const [chating, setChating] = useState(false);

  //to handle if the value changed set it in the props function
  //////// handling Chatting/////////////////////////
  // const cahtingHandling = (e) => {
  //   console.log(props.parentid);
  //   setChating(true);
  // };

  ///notation//////////////////////////////////////////////////////////////
  React.useEffect(() => {
    if (!props.isChanged) {
      setrating(2);
      setcheckedabsence(false);
      setcheckedpresent(false);
    }
  }, [props]);

  React.useEffect(() => {
    if (props.range) {
      const range = +props.range;
      console.log(range);
      if (range >= 90) {
        setcolor(" bg-green-700");
        console.log(color);
      } else if (range < 90 && range >= 80) {
        setcolor(" bg-blue-700");
        console.log(color);
      } else if (range < 80 && range >= 60) {
        setcolor(" bg-yellow-700");
        console.log(color);
      } else {
        setcolor(" bg-red-700");
        console.log(color);
      }
      console.log(color);
    }
  }, [props.range, setcolor]);

  const handleLevelInputChange = (e, value) => {
    setrating(value);
    props.onLevelChange(props.id, value);
    console.log(value);
  };
  const handlabsenseInputChange = (e) => {
    if (e.target.value === "absence") {
      setcheckedabsence(true);
      setcheckedpresent(false);
      props.onAbsenceChange(props.id, e.target.value);
    } else {
      setcheckedpresent(true);
      setcheckedabsence(false);
      props.onAbsenceChange(props.id, e.target.value);
    }

    //
  };

  //////// Handle Note text Area/////////////
  const handleCommentSubmit = (event) => {
    props.onNoteChange(props.id, comment);
    console.log(`Comment submitted: ${comment}`);
    setComment("");
    setIsCommentVisible(false);
    setIsButtonVisible(true);
  };

  const handleCommentButtonClickMain = () => {
    setIsCommentVisible((prevIsCommentVisible) => !prevIsCommentVisible);
    setIsButtonVisible(false);
  };

  const handleCommentButtonClickSecendary = () => {
    setIsCommentVisible((prevIsCommentVisible) => !prevIsCommentVisible);
    setIsButtonVisible(true);
  };
  //////////////////////////////////////////////////////////////////////////
  return (
    <>
      <tr key={props.id}>
        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
              <Avatar alt={props.name} src={props.imgSrc} />
            </div>
            <div className="ml-3">
              <p className="text-blue-400 whitespace-no-wrap">{props.name}</p>
            </div>
          </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm  text-left">
          {props.StudentInfo ? (
            <div id={props.id}>{props.gender}</div>
          ) : (
            <button
              id={props.parentid}
              type="button"
              // onClick={cahtingHandling}
              className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
              Contact
            </button>
          )}

          {/* {chating && <DirectChatPage parentid={props.parentid} />} */}
        </td>

        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          {props.StudentInfo ? (
            <div>{props.dateofBirth}</div>
          ) : (
            <div className=" flex flex-wrap sm:gap-1">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  name={props.id}
                  checked={checkedabsence}
                  className="w-4 h-4 cursor-pointer"
                  value="absence"
                  onChange={handlabsenseInputChange}
                />
                <label
                  htmlFor={props.id + "Absent"}
                  className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer">
                  Absent
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  id={props.id + "Present"}
                  type="radio"
                  checked={checkedpresent}
                  value="present"
                  name={props.id}
                  className="w-4 h-4 cursor-pointer"
                  onChange={handlabsenseInputChange}
                />
                <label
                  htmlFor={props.id + "Present"}
                  className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer">
                  Present
                </label>
              </div>
            </div>
          )}
        </td>
        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          {props.StudentInfo ? (
            <>{props.absence}</>
          ) : (
            isCommentVisible && (
              <div className=" w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label htmlFor="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                    placeholder="Write a comment..."
                    required
                    value={comment}
                    onChange={(event) =>
                      setComment(event.target.value)
                    }></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={handleCommentSubmit}>
                    Send
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                    onClick={handleCommentButtonClickSecendary}>
                    Hide
                  </button>
                </div>
              </div>
            )
          )}
          {isButtonVisible && !props.StudentInfo ? (
            <button
              type="button"
              className="mx-20 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleCommentButtonClickMain}
              style={{ order: isCommentVisible ? 2 : 1 }}>
              Send
            </button>
          ) : (
            ""
          )}
        </td>

        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          {props.StudentInfo ? (
            <div className={`${color} text-white  rounded-sm text-center `}>
              {props.range} %{" "}
            </div>
          ) : (
            <>
              <Rating
                rating={rating}
                isChanged={props.isChanged}
                setrating={setrating}
                onChangeRatng={handleLevelInputChange}
              />
              <span> {rating}</span>
            </>
          )}
        </td>
      </tr>
    </>
  );
};

export const AddMarkRow = (props) => {
  // to handle if the value changed set it in the props function
  const [rating, setrating] = useState(2);
  const [comment, setComment] = useState("");
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [mark, setmark] = useState("");
  ////////////////////// Handling Change data /////////////////////////////
  let rate = 2;
  React.useEffect(() => {
    if (!props.isChanged) {
      setrating(2);
      setmark("");
    } else {
    }
  }, [props]);

  const handleLevelInputChange = () => {
    console.log(rating);
    props.onLevelChange(props.id, rating);
  };
  const handlMarkInputChange = (e) => {
    props.onMarkChange(props.id, e.target.value);
    console.log(mark);
  };

  //////////////////// Handling Note text Area /////////////////////////
  const handleCommentSubmit = (event) => {
    props.onNoteChange(props.id, comment);
    console.log(`Comment submitted: ${comment}`);
    setComment("");
    setIsCommentVisible(false);
    setIsButtonVisible(true);
  };

  const handleCommentButtonClickMain = () => {
    setIsCommentVisible((prevIsCommentVisible) => !prevIsCommentVisible);
    setIsButtonVisible(false);
  };
  //
  const handleCommentButtonClickSecendary = () => {
    setIsCommentVisible((prevIsCommentVisible) => !prevIsCommentVisible);
    setIsButtonVisible(true);
  };

  return (
    <tr key={props.id}>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <Avatar alt={props.name} src={props.imgSrc} />
          </div>
          <div className="ml-3">
            <p className="text-blue-400 whitespace-no-wrap">{props.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm  text-left">
        <button
          type="button"
          className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
          Contact
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        {/* when the user enter any marke change the value and send it to  */}
        <InputMark
          onChangeRate={handleLevelInputChange}
          setmark={setmark}
          mark={mark}
          onChangeMark={handlMarkInputChange}
          on
        />
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        {isCommentVisible && (
          <div className=" w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">
                Your comment
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
                value={comment}
                onChange={(event) => setComment(event.target.value)}></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                onClick={handleCommentSubmit}>
                Send
              </button>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                onClick={handleCommentButtonClickSecendary}>
                Hide
              </button>
            </div>
          </div>
        )}
        {isButtonVisible && (
          <button
            type="button"
            className="mx-32 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleCommentButtonClickMain}
            style={{ order: isCommentVisible ? 2 : 1 }}>
            Send
          </button>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <Rating
          mark={mark}
          // onChangeRate={handleLevelInputChange}
          isChanged={props.isChanged}
          rating={rating}
          setrating={setrating}
        />
        <span>{rating}</span>
      </td>
    </tr>
  );
};

// this row for the marks table in parent page that includes the subject and the mark and the notes and the rating
export const ShowMark = (props) => {
  const [color, setcolor] = useState("");
  React.useEffect(() => {
    const range = +props.mark;
    if (range >= 90) {
      setcolor(" bg-green-700");
    } else if (range < 90 && range >= 80) {
      setcolor(" bg-blue-700");
    } else if (range < 80 && range >= 60) {
      setcolor(" bg-yellow-700");
    } else {
      setcolor(" bg-red-700");
    }
  }, [props.mark]);
  return (
    <tr key={props.name}>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <div className="flex items-center">
          <div className="ml-3">
            <p className="text-blue-400 whitespace-no-wrap">{props.name}</p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm  text-left">
        <button
          type="button"
          className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
          Contact
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm ">
        {/* when the user enter any marke change the value and send it to  */}
        <span
          className={`${color} w-fit text-blue-gray-900 px-4 py-2 rounded-md`}>
          {props.mark}
        </span>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        {props.note}
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <Rating star={props.star} />
      </td>
    </tr>
  );
};

export const AbsenceDetailsRow = (props) => {
  const absenceDate = props.absence.abcenceDate.split("T")[0];
  return (
    <tr>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <button
          type="button"
          className="  bg-clip-border bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]">
          Contact
        </button>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <div
          className="relative inline-block align-baseline font-sans uppercase center whitespace-nowrap rounded-lg select-none bg-gradient-to-tr from-green-600 to-green-400 text-white py-0.5 px-2 text-[11px] font-medium"
          data-projection-id="15"
          style={{ opacity: 1 }}>
          <div className="  mt-px">{props.absence.absecnceState}</div>
        </div>
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <Rating rate={props.rating} />
      </td>
      <td className="py-3 px-5 border-b border-blue-gray-50">
        <span>{props.note.note}</span>
      </td>

      <td className="py-3 px-5 border-b border-blue-gray-50">
        <p className="block antialiased font-sans text-xs font-semibold text-blue-gray-600">
          {absenceDate}
        </p>
      </td>
    </tr>
  );
};

export default DashboardRow;

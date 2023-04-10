import React, { useState } from "react";
import Rating from "../../Rating/Rating";
import Avatar from "@mui/material/Avatar";
import RatingComp from "../../Rating/Rating";
import InputMark from "../../InputMarkComponent/InputMark";

const DashboardRow = (props) => {
  const [rating, setrating] = useState(2);
  const [comment, setComment] = useState("");
  const [isCommentVisible, setIsCommentVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  //to handle if the value changed set it in the props function

  const handleLevelInputChange = (e, value) => {
    props.onLevelChange(props.id, value);
    console.log(value);
  };
  const handlabsenseInputChange = (e) => {
    props.onAbsenceChange(props.id, e.target.value);
    //
  };
  const handlnoteInputChange = (e) => {
    props.onNoteChange(props.id, e.target.value);
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
          <button
            type="button"
            className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
          >
            Contact
          </button>
        </td>
        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          <div className=" flex flex-wrap sm:gap-1">
            <div className="flex items-center mr-4">
              <input
                type="radio"
                name={props.id}
                className="w-4 h-4 cursor-pointer"
                value="absence"
                onChange={handlabsenseInputChange}
              />
              <label
                htmlFor={props.id + "Absent"}
                className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
              >
                Absent
              </label>
            </div>
            <div className="flex items-center mr-4">
              <input
                id={props.id + "Present"}
                type="radio"
                value="present"
                name={props.id}
                className="w-4 h-4 cursor-pointer"
                onChange={handlabsenseInputChange}
              />
              <label
                htmlFor={props.id + "Present"}
                className="ml-2 text-sm font-medium text-blue-600 dark:text-gray-300 cursor-pointer"
              >
                Present
              </label>
            </div>
          </div>
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
                  onChange={(event) => setComment(event.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  onClick={handleCommentSubmit}
                >
                  Send
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                  onClick={handleCommentButtonClickSecendary}
                >
                  Hide
                </button>
              </div>
            </div>
          )}
          {isButtonVisible && (
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={handleCommentButtonClickMain}
              style={{ order: isCommentVisible ? 2 : 1 }}
            >
              Send
            </button>
          )}
        </td>
        <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
          <Rating
            rating={rating}
            setrating={setrating}
            onChangeRatng={handleLevelInputChange}
          />
          <span> {rating}</span>
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
  ////////////////////// Handling Change data /////////////////////////////

  const handleLevelInputChange = (e, value) => {
    props.onLevelChange(props.id, value);
    console.log(value);
  };
  const handlMarkInputChange = (e) => {
    props.onMarkChange(props.id, e.target.value);
    //
  };
  const handlnoteInputChange = (e) => {
    props.onNoteChange(props.id, e.target.value);
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
          className="bg-blue-500  inline-block rounded bg-info px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#54b4d3] transition duration-150 ease-in-out hover:bg-info-600 hover:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:bg-info-600 focus:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)] focus:outline-none focus:ring-0 active:bg-info-700 active:shadow-[0_8px_9px_-4px_rgba(84,180,211,0.3),0_4px_18px_0_rgba(84,180,211,0.2)]"
        >
          Contact
        </button>
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        {/* when the user enter any marke change the value and send it to  */}
        <InputMark onChangeMark={handlMarkInputChange} />
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
                onChange={(event) => setComment(event.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                onClick={handleCommentSubmit}
              >
                Send
              </button>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                onClick={handleCommentButtonClickSecendary}
              >
                Hide
              </button>
            </div>
          </div>
        )}
        {isButtonVisible && (
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleCommentButtonClickMain}
            style={{ order: isCommentVisible ? 2 : 1 }}
          >
            Send
          </button>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-100 bg-white text-sm">
        <Rating
          onChangeRatng={handleLevelInputChange}
          rating={rating}
          setrating={setrating}
        />
        <span> {rating}</span>
      </td>
    </tr>
  );
};

export default DashboardRow;

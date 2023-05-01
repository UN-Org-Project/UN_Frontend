import "./chat.css";
// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const ChatsPage = (props) => {
//   return (
//     <div style={{ height: "100vh", width: "100vw" }}>
//       <PrettyChatWindow
//         projectId="
//           b8ca72e8-1f9d-46b9-a3d7-18dcc011f59e"
//         username="641719a4f762f9578985b773" // adam
//         secret="pbkdf2_sha256$260000$DRFVDLSc6RZpXtl6MyGJqa$ov17nCRdukXS84TQb67mEOPjhE1Ux9fy4HbLR/pvgnQ=" // pass1234
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };

// export default ChatsPage;
// import {
//   MultiChatSocket,
//   MultiChatWindow,
//   useMultiChatLogic
// } from "react-chat-engine-advanced";
// const AdminDb = (props) => {
//   const chatprop = useMultiChatLogic(
//     "b8ca72e8-1f9d-46b9-a3d7-18dcc011f59e",
//     "64138fc1aced1a0ffacfe0b0",
//     "pbkdf2_sha256$260000$wseSyYEq3LVhVI4x1bcd31$NcN+flN7jV1634+ZD2Hhvu8mF+rOrHAAq4vPOeuG2nU="
//   );
//   return (
//     <div style={{ height: "100vh" }}>
//       <MultiChatSocket {...chatprop} />
//       <MultiChatWindow {...chatprop} style={{ height: "100%" }} />
//     </div>
//   );
// };
// import React from "react";

// import {
//   MultiChatWindow,
//   MultiChatSocket,
//   useMultiChatLogic
// } from "react-chat-engine-advanced";

// const AdminDb = (props) => {
//   const chatProps = useMultiChatLogic(
//     "b8ca72e8-1f9d-46b9-a3d7-18dcc011f59e",
//     "64138fc1aced1a0ffacfe0b0",
//     "muath"
//   );
//   return (
//     <>
//       <MultiChatWindow {...chatProps} />
//       <MultiChatSocket {...chatProps} />
//     </>
//   );
// };

// import React from "react";
// import { PrettyChatWindow } from "react-chat-engine-pretty";

// const AdminDb = () => {
//   const user_2 = "muath";
//   const sendMessage = (chatId, message) => {
//     // const { chatEngine } = props;
//     chatEngine.sendMessage(chatId, message);
//   };

//   return (
//     <div style={{ height: "100vh" }}>
//       <PrettyChatWindow
//         projectId="b8ca72e8-1f9d-46b9-a3d7-18dcc011f59e"
//         username="Ali"
//         secret="mmm"
//         onSendMessage={(chatId, message) => sendMessage(chatId, message)}
//         style={{ height: "100%" }}
//       />
//     </div>
//   );
// };
// export default AdminDb;
// import React, { useState } from "react";
// import { ChatEngine, getOrCreateChat } from "react-chat-engine";

// const DirectChatPage = () => {
//   const [username, setUsername] = useState("muath");

//   function createDirectChat(creds) {
//     getOrCreateChat(
//       creds,
//       { is_direct_chat: true, usernames: [username] },
//       () => setUsername("muath")
//     );
//   }

//   function renderChatForm(creds) {
//     return (
//       <div className="created">
//         <input
//           type="text"
//           placeholder="muath"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button onClick={() => createDirectChat(creds)}>Create</button>
//       </div>
//     );
//   }

//   return (
//     <ChatEngine
//       height="92vh"
//       userName="641719a4f762f9578985b773"
//       userSecret="1234"
//       projectID="
//       3d65a74f-ff33-4d31-bc09-edf06decc0d5"
//       renderNewChatForm={(creds) => renderChatForm(creds)}
//     />
//   );
// };

// export default DirectChatPage;

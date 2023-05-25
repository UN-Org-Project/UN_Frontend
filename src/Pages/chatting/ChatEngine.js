import "./chat.css";
import React, { useState, useEffect } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import { ChatCard } from "react-chat-engine";
import { useParams } from "react-router-dom";
import axios from "axios";
const ChatEngineComp = () => {
  const secret = localStorage.getItem("userData");
  const name_user = localStorage.getItem("nameOfuser");
  const userState = localStorage.getItem("userState");
  const [username, setUsername] = useState("muath");
  const { id: user_id } = useParams();
  useEffect(() => {
    console.log(secret);
    console.log(user_id);
    async function fetch() {
      try {
        const response = await axios.post(
          "http://localhost:8000/auth/Info/" + user_id,
          { userState: userState }
        );
        console.log(response.data.nameOfUser);
        const username = response.data.nameOfUser;
        setUsername(username);
      } catch (e) {
        console.log(e);
      }
    }

    fetch();
  }, []);

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    if (user_id !== secret) {
      return (
        <div className="created">
          <input
            type="text"
            placeholder="muath"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => createDirectChat(creds)}>Create</button>
        </div>
      );
    } else {
      return (
        <>
          <br></br>
          <span>{`${userState} _ ${name_user}`}</span>
        </>
      );
    }
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="42ec5e7e-b43d-49fc-be0e-f6d36dd9fc1a"
      userName={name_user}
      userSecret={secret}
      renderNewChatForm={(creds) => renderChatForm(creds)}
      renderChatCard={(chat, index) => (
        <ChatCard key={`${index}`} chat={chat} />
      )}
    />
  );
};

export default ChatEngineComp;

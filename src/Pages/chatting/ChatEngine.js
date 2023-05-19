import "./chat.css";
import React, { useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const ChatEngineComp = () => {
  const [username, setUsername] = useState("muath");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("muath")
    );
  }

  function renderChatForm(creds) {
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
  }

  return (
    <ChatEngine
      height="100vh"
      projectID=" a28d11b3-d55a-4061-9d75-02ddfaa1d311"
      userName="ahmad"
      userSecret="123123"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default ChatEngineComp;

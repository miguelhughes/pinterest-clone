import React from "react";
import Header from "./Header";
import "./index.css";
import BoardList from "./BoardList";
import userData from "./userData";
import ReadmeViewer from "@bit/miguelhughes.showcase.readme-viewer";

const UserPublicView = () => {
  return (
  	<>
  	<ReadmeViewer repoName="pinterest-clone"/>
    <div className="container">
      <Header user={userData} />
      <BoardList boards={userData.boards} author={userData.name} />
    </div>
    </>
  );
};

export default UserPublicView;

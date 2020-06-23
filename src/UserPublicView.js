import React from "react";
import Header from "./Header";
import "./index.css";
import BoardList from "./BoardList";

const pinterestData = {
  name: "Aviation Explorer",
  stats: {
    boards: 37,
    pins: 8943,
    likes: 186,
    followers: 8943,
    following: 1897,
  },
  boards: [
    {
      id: 1,
      name: "DIY - Tips Tricks Ideas Repair",
      images: [
        "https://removeandreplace.com/wp-content/uploads/2020/03/Fix-LED-lights-flickering.jpg",
        "https://cdn-fastly.hometalk.com/media/2019/10/04/5904378/s-appliance-repair.jpg?size=720x845&nocrop=1",
        "https://arcsandiego.com/images/content/refrigerator_fridge_repair_carlsbad_ca-300x225.jpg",
        "https://i.pinimg.com/564x/fb/e8/ee/fbe8ee3eb2b9bb6b2abcdeacaf55c8e8.jpg",
      ],
      pinCount: 5636,
    },
    {
      id: 2,
      name: "AVIATION",
      images: [
        "https://i.pinimg.com/474x/ef/d2/62/efd262c4391b42dca4724035a8747013.jpg",
        "https://i.pinimg.com/474x/b7/8e/ff/b78effcb6587dc1884394393b37e002f.jpg",
        "https://i.pinimg.com/474x/8f/5c/7a/8f5c7a14fb4910afd2b87bf0e9216a7d.jpg",
        "https://i.pinimg.com/474x/7d/de/be/7ddebed41d44cc88b803d2599460e8e8.jpg",
      ],
      pinCount: 652,
    },
    {
      id: 3,
      name: "Exceptional Aviation",
      images: [
        "https://i.pinimg.com/474x/c6/76/58/c67658d130186c4c477742b05c48a622.jpg",
        "https://i.pinimg.com/474x/02/fc/2b/02fc2b053e86445e11a45d97a8d4724e.jpg",
        "https://i.pinimg.com/474x/17/b3/81/17b381c31793c823864bb774eb540a43.jpg",
        "https://i.pinimg.com/474x/b7/1c/94/b71c94ec4499f136c14a37bf0dc3777a.jpg",
      ],
      pinCount: 218,
    },
    {
      id: 4,
      name: "AEROSPACE ✈",
      images: [
        "https://i.pinimg.com/474x/80/25/a1/8025a1d326569ec68a96bd9bc9929dd6.jpg",
        "https://i.pinimg.com/474x/91/21/cf/9121cfe8cef9f4f2d06b77dc3b331d94.jpg",
        "https://i.pinimg.com/474x/1b/55/7d/1b557d3cfb06c9e7b1c700002650b7d2.jpg",
        "https://i.pinimg.com/474x/56/66/05/566605e72b2e87599fb64cfc7b5e94d9.jpg",
      ],
      pinCount: 2309,
    },
    {
      id: 5,
      name: "Amazing military images",
      images: [
        "https://i.pinimg.com/474x/16/56/bf/1656bf2a72ed3855f3ce2fc3e11613bd.jpg",
        "https://i.pinimg.com/474x/93/36/69/933669aae5159abb29687e8b703b1f32.jpg",
        "https://i.pinimg.com/474x/64/4a/1c/644a1cad936cf7775da7e284cea1df90.jpg",
        "https://i.pinimg.com/474x/cb/94/89/cb948904b955521faf80abc0ced99743.jpg",
      ],
      pinCount: 239,
    },
    {
      id: 6,
      name: "Aircraft Recycled Into Furniture",
      images: [
        "https://i.pinimg.com/474x/43/6e/22/436e225cbe0dbf311e624a84b386b10c.jpg",
        "https://i.pinimg.com/474x/2b/86/b9/2b86b94417aeaca20ae29a90cf66b0c5.jpg",
        "https://i.pinimg.com/474x/02/ba/7e/02ba7e5da499225982859c721f2df6f0.jpg",
        "https://i.pinimg.com/474x/ac/8d/cc/ac8dcc7bfd25dc17911fff364f51e68f.jpg",
      ],
      pinCount: 75,
    },
  ],
};

const UserPublicView = () => {
  return (
    <div className="container">
      <Header user={pinterestData} />
      <BoardList boards={pinterestData.boards} author={pinterestData.name} />
    </div>
  );
};

export default UserPublicView;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/post";

function App() {
  const [desc, setDesc] = useState("");
  const [local, setLocal] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setDesc(value);
  };
  const dispatch = useDispatch();
  const state = useSelector((state) => state.postReducer);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPosts({ desc: desc }));
    setDesc("");
  };
  const saveLocal = () => {
    localStorage.setItem("state", JSON.stringify(state));
  };
  const localPost = () => {
    if (localStorage.getItem("state") === null) {
      localStorage.setItem("state", JSON.stringify([]));
    } else {
      let localData = JSON.parse(localStorage.getItem("state"));
      setLocal(localData);
    }
  };
  console.log(local);
  useEffect(() => {
    localPost();
  }, []);
  useEffect(() => {
    saveLocal();
  }, [state]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={desc}
          onChange={handleChange}
          placeholder="post"
        />
        <button type="submit">Post</button>
        {state?.map((list) => (
          <h1 key={list.desc}>{list.desc}</h1>
        ))}
      </form>
    </div>
  );
}
export default App;

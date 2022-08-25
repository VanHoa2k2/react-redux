import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/postSlice";
import Input from "../InputFields/Input";
import "./post.css";

const MakePost = (props) => {
  const { setOpen } = props;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Add a title");
  const [desc, setDesc] = useState("Add some description");
  const [selectedId, setSelectedId] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setOpen(false);
    const newPost = {
      title: title,
      description: desc,
      tag: selectedId,
    };
    dispatch(createPost(newPost));
  };
  return (
    <section className="makepost-container">
      <div className="makepost-navigation">
        <p className="makepost-save" onClick={handlePost}>
          Post
        </p>
      </div>
      <Input
        data={title}
        inputType="textArea"
        setData={setTitle}
        label="Title"
        classStyle="makepost-title"
      />
      <Input
        data={desc}
        inputType="textArea"
        setData={setDesc}
        label="Description"
        classStyle="makepost-desc"
      />
      <label> Tags</label>
      <div className="makepost-tags">
        {tags.map((tag, idx) => (
          <button
            key={idx}
            className={`${
              selectedId === idx
                ? `makepost-tags-selected`
                : `makepost-tags-${tag}`
            }`}
            onClick={() => setSelectedId(idx)}
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default MakePost;

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RowPost({ title, message, id }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/post/${id}`);
    }
    

  return (
    <tr className="border cursor-pointer hover:border-purple-500" onClick={handleClick}>
      <td>{title}</td>
      <td>{message}</td>
    </tr>
  );
}

export default RowPost;
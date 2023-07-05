import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RowPost({ title, message, id }) {
    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/post/${id}`);
    }
    

  return (
    <tr className="border" onClick={handleClick}>
      <td>{title}</td>
      <td>{message}</td>
    </tr>
  );
}

export default RowPost;

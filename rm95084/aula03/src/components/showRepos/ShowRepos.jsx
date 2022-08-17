import React from "react";
import { useEffect } from "react";

const ShowRepos = (props) => {
  useEffect(async() => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      props.setRepositorios(data)
  }, []);


  return (
    <div>
      <h2>Show Repos</h2>
      <p>{props.repositorios}</p>
      <button
        onClick={() => {
          props.setRepositorios("Lucas");
        }}
      >
        alterar
      </button>
    </div>
  );
};

export default ShowRepos;

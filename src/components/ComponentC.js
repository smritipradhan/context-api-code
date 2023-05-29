import React from "react";
import { withUser } from "../contexts/mockConsumer";
import { useContext } from "react";
import { UserContext } from "../contexts/mockContexts";

function ComponentC() {
  const { name, happyBirthday, age } = useContext(UserContext);

  return (
    <div>
      ComponentC and the name is {name}
      Age is {age}
      <button onClick={happyBirthday}>happyBirthday</button>
    </div>
  );
}

export default ComponentC;

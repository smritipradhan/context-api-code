# Context API

Context API is providing data to the components without sending props at different levels in Component Tree.There are only three steps
1.create Context
2.Provider to provide Context
3.Consumer

## 1.createContext()

```
import React, { createContext } from "react";
export const UserContext = createContext();
```

## 2.Provider

```
import { useState } from "react";
import { UserContext } from "./mockContexts";

const UserProvider = ({ children }) => {
  const [name] = useState("Smrit Pradhan");
  const [age, setAge] = useState(1);
  const happyBirthday = () => setAge(age + 1);
  return (
    <UserContext.Provider value={{ name, age, happyBirthday }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
```

## Consumer

```
import { UserContext } from "./mockContexts";

const withUser = (Child) => (props) =>
  (
    <UserContext.Consumer>
      {(context) => <Child {...props} {...context} />}
      {/* Another option is:  {context => <Child {...props} context={context}/>}*/}
    </UserContext.Consumer>
  );

export { withUser };
```

Using in the Component

```
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
```

https://www.loginradius.com/blog/engineering/react-context-api/

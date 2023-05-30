# Context API

- The Context API in React provides a way to share data between components without passing props through the component tree manually.
- It allows you to create a central data store (context) and access that data from any component within the context.

## Functional Component

1. Create Context

```
import React, { createContext } from "react";
const UserContext = createContext();
```

2. Create Provider

```
const UserProvider = ({ children }) => {
  const user = { name: "John", age: 25 };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
```

3. Use Consumer

```
const UserInfo = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};
```

4. Usage in App component

```
const App = () => {
  return (
    <UserProvider>
      <UserInfo />
    </UserProvider>
  );
};
```

- In this example, we create a UserContext using createContext() and provide a value (user object) in the UserProvider component.
- The UserInfo component consumes the UserContext using useContext() and displays the user's name and age.

## Class Component

1. Create Context

```
import React, { createContext } from "react";
const ThemeContext = createContext();
```

2. Create Provider

```
class ThemeProvider extends React.Component {
  state = {
    theme: "light",
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
```

3. Use Consumer

```
class ThemeToggle extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(theme) => (
          <button onClick={this.toggleTheme}>
            {theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"}
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "light" ? "dark" : "light",
    }));
  };
}
```

4. Usage in App Component

```
class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );
  }
}

export default App;
```

- we create a ThemeContext using createContext() and provide the theme value in the ThemeProvider class-based component.
- The ThemeToggle component consumes the ThemeContext using the Consumer component and displays a button to toggle the theme.

## What issue Context API solves ?

- The Context API solves the issue of prop drilling in React. Prop drilling is the process of passing props down through a component tree, usually from a parent component to a child component. This can be cumbersome and error-prone, especially if the data being passed is complex or changes frequently.

- The Context API provides a way to share data between components without having to pass props down manually. This makes it easier to maintain and update your code, and it can also improve performance by reducing the number of props that need to be passed.
- Here are the issues that the Context API helps to address:

  - Prop Drilling: As your application grows and you have deeply nested components, passing props from a top-level component to a deeply nested component becomes impractical and cumbersome. The Context API allows you to define data at a higher level and access it directly in any component that needs it, without having to pass the data through all the intermediate components.

  - Sharing State: In some cases, you may have stateful data that needs to be shared among multiple components. With the Context API, you can define a context and store the shared state within it. Components that are interested in accessing or updating that shared state can consume the context and interact with the state directly, without having to pass it as props from a common ancestor.

  - Cross-Component Communication: Sometimes, components that are not directly related to each other need to communicate or share data. The Context API enables this by providing a central data store that can be accessed from any component within the context. Components can subscribe to the context and receive updates whenever the data changes.

  - Avoiding Prop Drilling Pitfalls: Prop drilling can lead to code that is difficult to maintain, understand, and refactor. By using the Context API, you can simplify your codebase by eliminating the need for passing props through multiple levels. This results in cleaner and more maintainable code.

## Conclusion

- Both functional and class-based components can utilize the Context API.
- Functional components use the useContext() hook to consume the context, while class-based components use the Consumer component within the render method to access the context value.
- Overall, the Context API helps to improve code organization, reduces coupling between components, and makes it easier to share data and state across your application without the need for manual prop passing.

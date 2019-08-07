# Combine Classes

concise syntax for combining classes with conditional logic in React.

- utilize conditional logic without ternary logic or if statements.
- combine multiple strings into a single string

# Installation

npm

```
$ npm install combine-classes
```

yarn

```
yarn add combine-classes
```

# Importing

First import `combineClasses` into the file you would like to use it using either named imports or default imports.

Named Imports

```ts
import { combineClasses } from "combine-classes";
```

Default Imports

```ts
import combineClasses from "combine-classes";
```

using require

```ts
const combineClasses = require("combine-classes");
```

# Examples

combining strings

```tsx
import combineClasses from "combine-classes";

const MyComponent = () => {
  return <div className={combineClasses("class1", "class2")} />;
};
```

conditonal logic

conditional logic should be passed in as an array of 2 elements, the first element should be a boolean and the second a string/

```ts
[boolean, string]; // i.e [true, "className"] or [false, "className"]
```

example with a component

```tsx
import combineClasses from "combine-classes";

const MyComponent = () => {
  const myConditionalLogic = Math.random() > 0.5;
  return (
    // "MyConditionalClass will be applied if myConditionalLogic === true"
    <div
      className={combineClasses("className", [
        myConditionalLogic,
        "MyConditionalClass"
      ])}
    />
  );
};
```

# Why use Combine Classes?

without combineClasses conditional class logic can become over-verbose and complicated. It's also easy to forget to put a space between classNames

using ternary

```tsx
const MyComponent = () => {
  const myConditionalLogic = Math.random() > 0.5;
  return (
    <div
      className={`className ${myConditionalLogic ? "MyConditionalClass" : ""}`}
    />
  );
};
```

using if logic

```tsx
const MyComponent = () => {
  const myConditionalLogic = Math.random() > 0.5;
  if (myConditionalLogic) {
    return <div className="classname MyConditionalClass" />;
  } else {
    return <div className="className" />;
  }
};
```

an exaggerated example

without `combineClasses`

```tsx
const MyComponent = () => {
  const myConditionalLogic1 = Math.random() > 0.5;
  const myConditionalLogic2 = Math.random() > 0.5;
  const myConditionalLogic3 = Math.random() > 0.5;
  const myConditionalLogic4 = Math.random() > 0.5;
  const myConditionalLogic5 = Math.random() > 0.5;

  return (
    <div
      // you also have to be very careful of space " " placement
      className={`className1 ${
        myConditionalLogic1 ? "ConditionalClass1" : ""
      } ${myConditionalLogic2 ? "ConditionalClass2" : ""} ${
        myConditionalLogic3 ? "ConditionalClass3" : ""
      } ${myConditionalLogic4 ? "ConditionalClass4" : ""} ${
        myConditionalLogic5 ? "ConditionalClass5" : ""
      }`}
    />
  );
};
```

with `combineClasses`

```tsx
import combineClasses from "combine-classes";

const MyComponent = () => {
  const myConditionalLogic1 = Math.random() > 0.5;
  const myConditionalLogic2 = Math.random() > 0.5;
  const myConditionalLogic3 = Math.random() > 0.5;
  const myConditionalLogic4 = Math.random() > 0.5;
  const myConditionalLogic5 = Math.random() > 0.5;
  return (
    <div
      className={
          combineClasses(
              "className",
              [myConditionalLogic1, "ConditionalClass1"]
              [myConditionalLogic2, "ConditionalClass2"]
              [myConditionalLogic3, "ConditionalClass3"]
              [myConditionalLogic4, "ConditionalClass4"]
              [myConditionalLogic5, "ConditionalClass5"]
              )
          }
    />
  );
};
```

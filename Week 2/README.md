# Flow 3 Afleveringer

Disclaimer: Nåede desværre ikke alle opgaver for denne uge.

----------------------------------------------------------------------------------------------------------------------------------

## Questions and answers to "List and Keys  (Fall 2019)" document.

----------------------------------------------------------------------------------------------------------------------------------

Q: What is the purpose of the key value, which must be given to individual rows n a react list?

A: The purpose is to have an unique identifier of the specifc element, so that if changes are made
    the virtual DOM can pickup specifc changes and then change them individually instead of remaking
    the entire DOM for a single change.

----------------------------------------------------------------------------------------------------------------------------------

Q: It's recommended to use a unique value from your data if available (like an ID). 
   How do you get a unique value in a map callback, for data without a unique id?
   
A: The Map Callback function can use 4 "parameters" (you only make the refference to them) in which
   one of them is an index number, which you could use as an unique id.

----------------------------------------------------------------------------------------------------------------------------------

Q: What is the difference(s) between state and props?

A: State is a datastructure that starts with a default value when the component is "mounted" (when it is being used)
   Props (short for properties) are a Component's configuration. They are received from above and do not have to just be data
   -- callback functions may be passed in as props.

----------------------------------------------------------------------------------------------------------------------------------

Q: For which scenarios would you use props, and for which would you use state?

A: When you are calling your component you would more than likely pass in a prop, while when you are describing a 
   component (programming it), you would do it with states.

----------------------------------------------------------------------------------------------------------------------------------

Q: Where is the only place you can set state directly as in:  this.state = {name: "Peter"};

A: It is inside the constructor of a class component.

----------------------------------------------------------------------------------------------------------------------------------

Q: How must you set state all other places?

A: First you define a constant with both a name and a setName, which you set equal to a useState with the value of name.

----------------------------------------------------------------------------------------------------------------------------------

----------------------------------------------------------------------------------------------------------------------------------

## Questions and answers to "Lifting State Up" document.

----------------------------------------------------------------------------------------------------------------------------------

Q: What is meant by the react term “Lifting State Up”?

A: To move a shared state up to their closest "ancestor" (shared parent component)

----------------------------------------------------------------------------------------------------------------------------------

Q: Where do you lift it up to?

A: You lift the state up their closest "ancestor" (shared parent component)

----------------------------------------------------------------------------------------------------------------------------------

Q: Which way does React recommend data to flow: From sibling to sibling, from bottom to top or from top to bottom?

A: Data should always flow downwards, which is the reason why we need lifting states when we want components to have shared states.

----------------------------------------------------------------------------------------------------------------------------------

Q: Lifting state up, involves a great deal of boilerplate code, what’s the benefit we get from doing “things” like this?

A: The benefit of doing this is that it makes the connection between components and their use much much easier, as in if one component changes the state of another, all we have to do is to change the states they use

----------------------------------------------------------------------------------------------------------------------------------



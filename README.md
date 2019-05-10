# ShoppingCartUsingReact

An attempt to learn React by creating a shopping cart
Phases and lifecycle hooks associated:
MOUNT: Component mounted to the DOM, component mounted means it is in the DOM
Lifecycle hooks in the phase: constructor, render, componentDidMount- called when component is rendered to the DOM, perfect place to make AJAX call to get data from the server
UPDATE: Component updated
Lifecycle hooks in the phase: render, componentDidUpdate
UNMOUNT: Component is removed from the DOM
Lifecycle hooks in the phase: componentWillUnmount

Many more lifecycle hooks are also there. But these are used most of the time.
Note: you cannot use a lifecycle hook in a stateless functional component.
Console shows the sequence of the execution

import React from 'react';

const Blog = () => {
    return (
        <div>
            <b> What are the different ways to manage a state in a react application</b>
            <p>There are four main types of state you need to properly manage in your React apps:<br></br>
            Local state, Global state, Server state, URL state,
                <br></br>
            Local (UI) state - Local state is data we manage in one or another component.

            Local state is most often managed in React using the useState hook.

            For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form's inputs.

            Global (UI) state - Global state is data we manage across multiple components.

            Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

            A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

            Sometimes state we think should be local might become global.

            Server state - Data that comes from an external server that must be integrated with our UI state.

            Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

            There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

            Fortunately there are tools such as SWR and React Query that make managing server state much easier.

            URL state - Data that exists on our URLs, including the pathname and query parameters.

            URL state is often missing as a category of state, but it is an important one.
            In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!

            There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.</p>
            
            
            <b>How does prototypical inheritance work?</b>
          <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.</p>
            
            <b>What is the unit test? Why should we write unit tests?</b>
            
           <p> Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
            
            To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

            Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could've been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
            Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
            It simplifies the debugging process.
            Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
            Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
            Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
            In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
            </p>
            
            <b>  React vs angular vs vue</b>
           <p> AngularJS was developed in 2009 by Google. The first version was Angular.JS. Angular is currently known as a JavaScript framework. Obviously, all significant Google projects have been developed with Angular.

            Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, and thus, the entire tree structure of the HTML tags is updated, which massively impacts the loading time. Angular.js has its Ionic framework for mobile applications.
            
            
            Facebook released React.js in March 2013 as a JavaScript library. Because React just provides one view, it is not appropriate for building an MVC architecture: you must solve the model and controller yourself. Besides this, there are only advantages and lots of advantages.

            One of the biggest of them is that React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts. This significantly impacts the loading times. In a positive way, of course.

            With React.js, you handle the markup and the logic in the same file, which means you can output variables in a view component (JSX). React offers a type of mobile solutions for applications called React-Native.
            
            
            Vue.js is a JavaScript-based progressive framework for creating single-page applications. It was created with scalability and incrementality in mind, as well as ease of integration with other view layer frameworks.

            Vue is built from the bottom up to be progressively adaptable, unlike other monolithic frameworks. The core library focuses solely on the view layer, and it's simple to use and connect with other libraries or applications. This framework's fast learning angle is almost a trademark. It's a flexible framework that may be used as a library or a full-fledged framework for developing large web applications.

            Vue.js combines the useful principles of the Angular and React frameworks and presents them in a minimalistic modern style. Web developers use Vue.js to create frontend user interfaces for web-based and hybrid mobile applications.</p>
            
          

        </div>
    );
};

export default Blog;
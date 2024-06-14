import React from "react";
import Listview from "./List";
import Increament from "./Incremant";

function Theory() {
  return (
    <div>
      <h2>What is React Js?</h2>
      <p>
        React is Developed by Facebook, React is a JavaScript library for
        building user interfaces on the web. React is a declarative, component
        based library that allows developers to build reusable UI components and
        It follows the Virtual DOM approach, which optimizes rendering
        performance by minimizing DOM updates. React is fast and works well with
        other tools and libraries.
      </p>
      <br />
      <h2>What is NPM in React Js? </h2>
      <p>
        In React.js, npm (Node Package Manager) is a package manager for
        JavaScript and Node.js environments. It is used to install, manage, and
        share reusable code packages or modules (also known as npm packages)
        with other developers.
      </p>
      <br />
      <h2>What is Role of Node Js in react Js? </h2>
      <p>
        <b>1. High server load: </b>Using Nodejs with React makes sense when
        your web application needs handling of multiple requests and maintaining
        server load balance.
      </p>
      <p>
        <b>2. Real-time data: </b>If your application’s core is based on
        Real-time Data-Intensive management or Data Streaming, using Nodejs is
        highly advisable for continued server connection.
      </p>
      <p>
        <b>3. JSON APIs: </b>Building JSON APIs for your application is very
        efficient with Nodejs due to high code reusability and easy code sharing
        in Reactjs.
      </p>
      <p>
        <b>4. Scalability: </b>Node and React enables developers to build
        multi-device, responsive, data-driven web apps with scalability for
        large projects, ensuring optimal website performance across various
        devices.
      </p>
      <p>
        <b>5. Fast Development: </b>Using React and Node for web app development
        yields high ROI, saving time and money. These technologies excel in
        creating fast and easy-to-maintain websites.
      </p>
      <br />
      <h2>What is CLI command In React Js?</h2>
      <p>
        React has its own command-line interface (CLI) commands. However, these
        CLI commands are currently only used to create a passable version of a
        react application using the command line.
      </p>
      <br />
      <h2>What is Components in React Js? </h2>
      <p>
        Components are independent and reusable bits of code. They serve the
        same purpose as JavaScript functions, but work in isolation and return
        HTML.
      </p>
      <br />
      <h2>What is Header and Content Components in React Js? </h2>
      <p>
        In React.js, a header component typically refers to a component
        responsible for rendering the header section of a web application or a
        webpage. This section usually contains elements like logos, navigation
        menus, user authentication controls, and any other essential elements
        that appear at the top of the page.
      </p>
      <p>
        A content component refers to a component that renders the main content
        of a webpage or a section of a webpage. This component is responsible
        for displaying the primary information or interactive elements that
        users interact with. It could include text, images, forms, buttons, or
        any other relevant content.
      </p>
      <br />
      <h2>
        How to install React Js on Windows, linux Operating System? How to
        install NPM and How to check version of NPM?{" "}
      </h2>
      <p>
        First install node js in Windows from its official site. Once installed,
        npm will also be installed alongside Node.js.
      </p>
      <p>
        In Linux you can install Node.js and npm using your Linux distribution's
        package manager.
      </p>
      <p>
        Once Node.js and npm are installed, you can use npm to create a new
        React.js project using this code:{" "}
        <b>npx create-react-app my-react-app</b>
      </p>
      <p>
        To check the version of npm installed on your system, you can use the
        following command in your terminal or command prompt: <b>npm -v</b>
      </p>
      <br />
      <h2>How to check version of React Js? </h2>
      <p>
        To check the version of React.js, you can use the following command in
        your terminal or command prompt: <b>npm view react version</b>
      </p>
      <h2>How to change in components of React Js? </h2>
      <p>
        you want the state of two components to always change together. To do
        it, remove state from both of them, move it to their closest common
        parent, and then pass it down to them via props.
      </p>
      <h2>How to Create a List View in React Js? </h2>
      <p>
        <Listview />
      </p>
      <h2>Create Increment decrement state change by button click? </h2>
      <p>
        <Increament />
      </p>
    </div>
  );
}

export default Theory;

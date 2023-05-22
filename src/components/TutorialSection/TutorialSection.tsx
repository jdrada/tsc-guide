import React from "react";

function TutorialSection() {
  const codeSnippet = `
  function greet(name) {
    console.log('Hello, ' + name + '!');
  }
  
  greet('John');
`;
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h1>Welcome to React Tutorial</h1>
        <code>{codeSnippet}</code>
      </div>
    </section>
  );
}

export default TutorialSection;

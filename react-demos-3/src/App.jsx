import React from 'react'

// From one JSX only one parent element can be returned.

const App = () => {
  const myName = "Hello there from India!!";

  const multiply = (a, b) => {
    return a*b;
  }

  const specialClass = "simply-special-class";

  return (
    <section>
      <p>
        {myName}
      </p>

      <p>
        My Friends List : {[
          "Alex ",
          "John ",
          "Rahul ",
          "Vaishnav "
        ]}
      </p>

      <p>
        2 * 6 = {multiply(2, 6)}
      </p>

      <p className={specialClass}>
        This is a simply made special class using embedding.
        For this go to :
        <ol>
          <li>right-click on the website</li>
          <li>click on inspect</li>
          <li>go to console</li>
        </ol>
      </p>
    </section>  
  )
}

export default App
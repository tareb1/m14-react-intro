// Main.jsx file

// Create a simple component

    // In your render function...
        // Set variables `name` and `interest`


        // Return div with two paragraphs


// Render your component in the `main` section

var Component = React.createClass({
    render:function() {
      var name = "Rebecca";
      var interest = "Eating";
      return (
        <div>
            <p>I'm {name} and I eat monkeys for breakfast.</p>
            <p>{interest} monkeys makes me happy.</p>
        </div>
      )
    }

});

ReactDOM.render(<Component/>,
  document.querySelector('main')
);

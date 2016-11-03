// Main.jsx file

// Create a simple component
    // In your render function...

            // Return div with two paragraphs

// Render your component in the `main` section

var Component = React.createClass({
    render:function(){
        return(
            <div>
                <p>Hello, my name is {this.props.NAME}</p>
                <p>I am interested in {this.props.INTEREST}</p>
            </div>
        );
    }
});

// Render your component in the `main` section
ReactDOM.render(<Component NAME="Rebecca" INTEREST="Chewing on food"/>,
    document.querySelector('main')
);

var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      data:[
        {
          "name": "Bulletin Board App with React.js",
          "skills": "React.js | ES6 | JSX | Babel | NPM",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Bulletin-Board-App-with-ReactJS.zip",
          "description": "Developed a Bulletin board app using React components and properties, added state to components to handle events, worked with PropTypes, developed a more complete app with React.js and companion tools like Babel, NPM, and more.",
          "type": "React",
          "boxClass": "col-sm-12 col-md-12 box-sp boxwrapper"
        },
        {
          "name": "Responsive Website & Images with JavaScript",
          "skills": "JavaScript | ES6 | HTML | CSS",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Website_Images_with_JS.zip",
          "description": "Created a fully functional website using JavaScript. Automated responsive images markup, and worked with objects, variables, data types, conditionals, functions, loops, closures, the DOM and more.",
          "type": "JavaScript",
          "boxClass": "col-sm-12 col-md-12 box-sp-two boxwrapper"
        },
        {
          "name": "Responsive Design with Bootstrap",
          "skills": "Bootstrap | Responsive Design | HTML | CSS | JavaScript",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Responsive_Design_with_Bootstrap.zip",
          "description": "Created a website with a custom Bootstrap layout grid, Inserted a navigation bar, a container for a hero image, glyphicons and page content by working with columns and containers.",
          "type": "Bootstrap",
          "boxClass": "col-sm-12 col-md-12 box-sp-three boxwrapper"
        },

      ]
    } //return
  }, //getInitialState

  render: function() {
    var filtered = this.state.data;
    filtered = filtered.map(function(item, index) {
    var images = this.state.data[index].type;
      if(images == "React" || images == "jQuery"){
        images = "/images/thumbnail-SVG/thumbnail-4.svg";
      } else if (images == "JavaScript") {
          images = "/images/thumbnail-SVG/thumbnail-3.svg";
      } else if (images == "Bootstrap") {
          images = "/images/thumbnail-SVG/thumbnail-1.svg";
        }//images selection if statement

        var boxClasses = this.state.data[index].boxClass;

      return (
        <div className={boxClasses} key={index}>
          <img src={images}
            className="img-thumbnail img-responsive center-block imgwrapper"
            width={"100"} alt={"thumbnail1"} />
          <h2>{this.state.data[index].name}</h2>
          <h3>{this.state.data[index].skills}</h3>
          <a className="btn btn-lg" href={this.state.data[index].downloadLink}>
          <img src={"/images/Download-Glyph.svg"} width={"30"} />
          <h5>DOWNLOAD</h5>
          </a>
          <p className="text-center">{this.state.data[index].description}</p>
        </div>
      )//return
    }.bind(this));//filtered.map
    return(
      <div>
        {filtered}
      </div>
    ) //retun
  } //render
}); //MainInterface

ReactDOM.render(
  <MainInterface />,
  document.querySelector('#interface')
); //render

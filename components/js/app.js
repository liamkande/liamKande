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
          "boxClass": "col-sm-12 col-md-12 box-sp boxwrapper",
          "pClass": "text-center"
        },
        {
          "name": "Responsive Website & Images with JavaScript",
          "skills": "JavaScript | ES6 | HTML | CSS",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Website_Images_with_JS.zip",
          "description": "Created a fully functional website using JavaScript. Automated responsive images markup, and worked with objects, variables, data types, conditionals, functions, loops, closures, the DOM and more.",
          "type": "JavaScript",
          "boxClass": "col-sm-12 col-md-12 box-sp-two boxwrapper",
          "pClass": "text-center"
        },
        {
          "name": "Responsive Design with Bootstrap",
          "skills": "Bootstrap | Responsive Design | HTML | CSS | JavaScript",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Responsive_Design_with_Bootstrap.zip",
          "description": "Created a website with a custom Bootstrap layout grid, Inserted a navigation bar, a container for a hero image, glyphicons and page content by working with columns and containers.",
          "type": "Bootstrap",
          "boxClass": "col-sm-12 col-md-12 box-sp-three boxwrapper",
          "pClass": "text-center"
        },
        {
          "name": "Interactive Resume",
          "skills": "jQuery | JavaScript | JSON | HTML | CSS",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/interactive_Resume.zip",
          "description": "Using jQuery, I developed an interactive resume application that reads all data from a JSON file and then dynamically modifies the DOM to display the information.",
          "type": "jQuery",
          "boxClass": "col-sm-6 col-md-4 box-one boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "SEO Audit",
          "skills": "SEO",
          "downloadLink": "http://liamkande.com/projects/P4_-_SEO_Audit__Project_Template_Slides.pdf",
          "description": "Performed an audit of a website, recommended actions to improve the website's ranking in search engine results, created a target keyword list, evaluated the design, content and the UX of the site, and recommended improvements.",
          "type": "SEO",
          "boxClass": "col-sm-6 col-md-4 box-two boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "Classic Arcade Game Clone",
          "skills": "JavaScript | Object-Oriented Programming | HTML5 Canvas",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Arcade-game_Frogger-Clone.zip",
          "description": "An HTML5 Canvas powered video game, developed using the best practices in Object Oriented JavaScript.",
          "type": "JavaScript",
          "boxClass": "col-sm-6 col-md-4 box-three boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "Website Optimization",
          "skills": "HTML | CSS | Chrome Developer Tools | critical rendering path | 60FPS rendering",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Optimization3.zip",
          "description": "Optimized an inefficient web application's JavaScript, CSS and assets delivery, ensuring it runs at 60fps and achieves a PageSpeed score of at least 90.",
          "type": "Optimization",
          "boxClass": "col-sm-6 col-md-4 box-four boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "Typing Speed Tester",
          "skills": "JavaScript | CSS | HTML",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Typing_Speed_Tester.zip",
          "description": "Used JavaScript to interact with the components of a app by creating event listeners to detect typing in the text area. Built a count-up timer. Created functions for leading zeros, spelling errors detector, and a reset button to stop the timer when the test is done.",
          "type": "JavaScript",
          "boxClass": "col-sm-6 col-md-4 box-three boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "Run an AdWords Campaign",
          "skills": "Search advertising with Adwords",
          "downloadLink": "http://liamkande.com/projects/P5_-Part_2.pdf",
          "description": "Created, executed, and monitored a search engine marketing campaign on AdWords for a product. Evaluated post-campaign results to and drafted a strategy for additional campaigns focused on ROI.",
          "type": "AdWords",
          "boxClass": "col-sm-6 col-md-4 box-two boxwrapper",
          "pClass": "text-center detail"
        },
        {
          "name": "Analog clock",
          "skills": "JavaScript | CSS | HTML",
          "downloadLink": "https://s3.us-east-2.amazonaws.com/liamkande.com/projects/Analog_Clock_Project.zip",
          "description": "Used objects and methods to get the current time, variables to hold information, methods to break that time, operators to translate information into degrees and DOM element properties for positioning.",
          "type": "JavaScript",
          "boxClass": "col-sm-12 col-md-12 box-sp-two boxwrapper",
          "pClass": "text-center"
        }
      ]//Json data
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
      } else if (images == "Bootstrap" || images == "Optimization") {
          images = "/images/thumbnail-SVG/thumbnail-1.svg";
        }else {
          images = "/images/thumbnail-SVG/thumbnail-2.svg";
        }
        //images selection if statement

        var boxClasses = this.state.data[index].boxClass;
        var pClasses = this.state.data[index].pClass;

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
          <p className={pClasses}>{this.state.data[index].description}</p>
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

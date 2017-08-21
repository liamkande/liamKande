var React = require('react');
var ReactDOM = require('react-dom');

var MainInterface = React.createClass({
  getInitialState: function() {
    return {
      data:[]
    } //return
  }, //getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('/js/projects.json', function(result) {
      var projects = result;
      this.setState({
        data: projects
      }); //setState
    }.bind(this));
    this.serverRequest = $.get("js/portfolio.js");
  }, //componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, //componentWillUnmount

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
        var preview = this.state.data[index].previewLink;

// The placeHolder is equivalent to a clearfix do not motified from json file
      if(this.state.data[index].name == "placeHolder"){
        return <div className= "clearfix visible-sm-block visible-md-block visible-lg-block" key={index}>
                </div>
      } else {

        return (
              <div className={boxClasses} key={index} >
                <a href={preview}>
                  <img src={images}
                  className="img-thumbnail img-responsive center-block imgwrapper"
                  width={"100"} alt={"thumbnail1"} />
                </a>
                <h2>{this.state.data[index].name}</h2>
              <h3>{this.state.data[index].skills}</h3>
              <a className="btn btn-lg" href={this.state.data[index].downloadLink}>
              <img src={"/images/Download-Glyph.svg"} width={"30"} />
              <h5>DOWNLOAD</h5>
              </a>
              <p className={pClasses}>{this.state.data[index].description}</p>
            </div>
        ) //return
    } //placeHolder if statement
    }.bind(this)); //filtered.map
    return(
      <div>
        {filtered}
      </div>
    ) //retun
  } //render
}); //MainInterface
// biopic interactive
ReactDOM.render(
  <MainInterface />,
  document.querySelector('article')
); //render

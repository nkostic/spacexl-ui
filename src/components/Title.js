import React from "react";

class Title extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered has-text-white">
              {this.props.children}
            </h1>
          </div>
        </div>
      </section>
    );
  }
}

export default Title;

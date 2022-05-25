import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArtDisplay from './ArtDisplay.jsx';

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedArt: false,
      art: [],
    };
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then((art) => {
        if (!Array.isArray(art)) art = [];
        return this.setState({
          art,
          fetchedArt: true
        });
      })
      .catch(err => console.log('Art.componentDidMount: get art: ERROR: ', err));
  }

  render() {
    if (!this.state.fetchedArt) return (
      <div>
        <h1>Loading data, please wait...</h1>
      </div>
    );

    const { art } = this.state;

    if (!art) return null;

    if (!art.length) return (
      <div>this exhibit is empty</div>
    );

    const artElems = art.map((a, i) => {
      return (
        <ArtDisplay
          key={i}
          info={a}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <Link to={'/curate'}>
            <button type="button" className="btnSecondary">Curate</button>
          </Link>
        </header>
        <div className="artContainer">
          {artElems}
        </div>
      </section>
    );
  }
}

export default Art;
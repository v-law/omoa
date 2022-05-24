import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArtDisplay from './ArtDisplay';
import DetailsModal from './DetailsModal';

class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchedArt: false,
      art: [],
      modalState: {
        open: false,
        type: null,
        position: { top: 0, left: 0 },
        id: null
      }
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    fetch('/api/')
      .then(res => res.json())
      .then((art) => {
        if (!Array.isArray(art)) art = [];
        return this.setState({
          art,
          fetchedChars: true
        });
      })
      .catch(err => console.log('Art.componentDidMount: get art: ERROR: ', err));
  }

  openModal(type, position, id) {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: true,
        type,
        position,
        id
      }
    });
  }

  closeModal() {
    this.setState({
      modalState: {
        ...this.state.modalState,
        open: false
      }
    });
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
      <div>Sorry, no art found</div>
    );

    const artElems = art.map((a, i) => {
      return (
        <ArtDisplay
          key={i}
          info={a}
          openModal={this.openModal}
        />
      );
    });

    return (
      <section className="mainSection">
        <header className="pageHeader">
          <h2>Art</h2>
          <Link to={'/curate'}>
            <button
              type="button"
              className="btnSecondary"
            >
              Curate Art
            </button>
          </Link>
        </header>
        <div className="artContainer">
          {artElems}
        </div>
        {this.state.modalState.open &&
          <DetailsModal
            type={this.state.modalState.type}
            position={this.state.modalState.position}
            id={this.state.modalState.id}
            closeModal={this.closeModal}
          />
        }
      </section>
    );
  }
}

export default Art;
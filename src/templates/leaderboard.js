import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/meetup.scss";

import HeadshotPlaceholder from "../img/headshot-placeholder.svg";

class LeaderboardsTemplate extends Component {
  render() {
    return (
      <section
        className={`meetup  ${this.props.className && this.props.className}`}
        key={this.props.meetup.rawDate}
      >
        <h2 className="meetup-title">{this.props.meetup.title}</h2>
        {/*<div className="meetup-meta">
          <p className="meetup-metaField  meetup-metaField--date">
            <span className="meetup-label">Date:</span> {this.props.meetup.formattedDate}
          </p>
          <p className="meetup-metaField  meetup-metaField--location">
            <span className="meetup-label">Location:</span> {this.props.meetup.location.name}
          </p>
        </div>*/}
        <div className="meetup-presenters">
          {this.props.leaderboard.racers.map(racer => (
            <div className="meetup-presenter" key={racer.name}>
              <div className="meetup-presenterImageContainer">
                <img
                  className="meetup-presenterImage"
                  src={racer.image ? racer.image : HeadshotPlaceholder}
                  alt={racer.image ? racer.name : "Default headshot placeholder"}
                />
                <span className="meetup-presenterName">{racer.name}</span>
              </div>
              <div className="meetup-presenterInfo">
                {racer.team && (
                  <h3 className="meetup-presenterTitle">{racer.team}</h3>
                )}
                <p className="meetup-presenterText">{racer.lastRaceFinish}</p>
                {/*<ul className="meetup-presenterLinks">
                  {presenter.links &&
                    presenter.links.map((link, index) => (
                      <li key={index} className="meetup-presenterLinkItem">
                        <a className="meetup-presenterLink" href={link.linkURL}>
                          {link.linkText}
                        </a>
                      </li>
                    ))}
                </ul>*/}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

LeaderboardsTemplate.propTypes = {
  leaderboard: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    racers: PropTypes.array,
  }),
};

export default LeaderboardsTemplate;

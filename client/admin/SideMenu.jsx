import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.handleAsideClick = this.handleAsideClick.bind(this);
  }

  handleAsideClick() {
    this.aside.classList.toggle('left-menu--is-active');
  }

  aside;

  render() {
    return (<aside
      className="left-menu"
      ref={(node) => { this.aside = node; }}
      onClick={this.handleAsideClick}
    >
      <div className="js-left-menu-activator left-menu__activator">
        ☰
      </div>
      <ul className="left-menu__list">
        <li className="left-menu__list-item">
          <Link
            className="left-menu__list-link"
            to="/admin/colours"
          >
            Colour Manager
          </Link>
        </li>
        <li className="left-menu__list-item">
          <Link
            className="left-menu__list-link"
            to="/admin/generator"
          >
            Generator
          </Link>
        </li>
      </ul>
    </aside>);
  }
}


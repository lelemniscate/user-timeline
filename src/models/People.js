import PropTypes from 'prop-types';

export default class People {

  constructor({ name, avatar, timezone }) {
    this.name = name;
    this.avatar = avatar;
    this.timezone = timezone;
  }

  get initials() {
    return this.name
      .split(' ')
      .map(namePart => namePart.substring(0, 1))
      .reduce((acc, letter) => acc + letter, '')
  }

  static get shape() {
    return PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string,
      timezone: PropTypes.string.isRequired,
    });
  }

}

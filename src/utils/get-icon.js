import ICONS from '../constants/icons';

const getIcon = name => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'vkontakte':
      icon = ICONS.VKONTAKTE;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'codepen':
      icon = ICONS.CODEPEN;
      break;
    case 'creativecommons':
      icon = ICONS.CREATIVECOMMONS;
      break;
    case 'creativecommonsby':
      icon = ICONS.CREATIVECOMMONSBY;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;

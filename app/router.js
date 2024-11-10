import EmberRouter from '@ember/routing/router';
import config from 'tech-talk/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('intro', { path: '/' }); 
  this.route('pseudo-classes');
  this.route('groups');
});

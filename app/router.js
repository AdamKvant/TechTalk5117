import EmberRouter from '@ember/routing/router';
import config from 'tech-talk/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('title');
  this.route('tailwind-about');
  this.route('tailwind-install');
  this.route('tailwind-plugin');
  this.route('demo-time');
  this.route('modifiers');
  this.route('pseudo-classes');
  this.route('groups');
  this.route('peers');
  this.route('decendants');
  this.route('has');
  this.route('media');
  this.route('darkmode');
  this.route('reusing');
  this.route('custom-styles');
  this.route('directives');
  this.route('functions');
});

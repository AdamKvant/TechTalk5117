import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class GlobalService extends Service {
    @tracked step = 1;
    @service router;

    chapters = [
    'title',
    'tailwind-about',
    'tailwind-install',
    'tailwind-plugin',
    'demo-time',
    'modifiers',
    'pseudo-classes',
    'groups',
    'peers',
    'decendants',
    'has',
    'media',
    'darkmode',
    'reusing',
    'custom-styles',
    'directives',
    'functions'
    ];

    numberOfSteps = this.chapters.length;
}
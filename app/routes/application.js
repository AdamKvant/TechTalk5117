import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service router;

    afterModel() {
        const step = 1;
        this.controllerFor('application').set('step', step);
        this.transitionStep(step);
    }

    chapters = [
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
    
    transitionStep(step) {
        console.log('transitioning to step', step);
        this.router.transitionTo(this.chapters[step - 1]);
    }
}
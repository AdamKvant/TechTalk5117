import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service router;
    @service global;

    afterModel() {
        this.global.step = 1;
        this.controllerFor('application').set('step', this.global.step);
        this.transitionStep(1);
    }

    transitionStep(step) {
        console.log('transitioning to step', step);
        this.router.transitionTo(this.global.chapters[step - 1]);
    }
}
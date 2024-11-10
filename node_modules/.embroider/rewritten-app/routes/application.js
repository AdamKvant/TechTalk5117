import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service router;

    afterModel() {
        const step = 1;
        this.controllerFor('application').set('step', step);
        this.transitionStep(step);
    }

    transitionStep(step) {
        console.log(`Transitioning to step: ${step}`);
        switch(step) {
            case 1:
                this.router.transitionTo('intro');
                break;
            case 2:
                this.router.transitionTo('pseudo-classes');
                break;
            case 3:
                this.router.transitionTo('groups');
                break;
        }
    }
}
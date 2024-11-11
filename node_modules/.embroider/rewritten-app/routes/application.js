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
            case 4:
                this.router.transitionTo('peers');
                break;
            case 5:
                this.router.transitionTo('decendants');
                break;
            case 6:
                this.router.transitionTo('has');
                break;
            case 7:
                this.router.transitionTo('media');
                break;
            case 8:
                this.router.transitionTo('darkmode');
                break;
            case 9:
                this.router.transitionTo('reusing');
                break;
            case 10:
                this.router.transitionTo('custom-styles');
                break;
            case 11:
                this.router.transitionTo('directives');
                break;
            case 12:
                this.router.transitionTo('functions');
                break;
        }
    }
}
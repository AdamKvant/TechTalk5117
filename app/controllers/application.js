import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @tracked step = 1;
    @service router;
    numberOfSteps = 11;

    
    transitionStep() {
        console.log('transitioning to step', this.step);
        switch(this.step) {
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

    @action
    nextStep() {
        if (this.step === this.numberOfSteps) {
            return;
        }
        this.step++;
        this.transitionStep();
    }

    @action
    previousStep() {
        if (this.step === 1) {
            return;
        }
        this.step--;
        this.transitionStep();
    }
}
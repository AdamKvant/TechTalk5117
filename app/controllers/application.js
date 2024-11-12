import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @service router;
    @service global;
    
    transitionStep(step) {
        console.log('transitioning to step', step);
        this.router.transitionTo(this.global.chapters[step - 1]);
    }

    @action
    nextStep() {
        if (this.global.step === this.global.numberOfSteps) {
            return;
        }
        this.transitionStep(++this.global.step);
    }

    @action
    previousStep() {
        if (this.global.step === 1) {
            return;
        }
        this.transitionStep(--this.global.step);
    }
}
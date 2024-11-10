import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @tracked step = 1;
    @service router;
    numberOfSteps = 2;

    transitionStep() {
        switch(this.step) {
            case 1:
                this.router.transitionTo('intro');
                break;
            case 2:
                this.router.transitionTo('pseudo-classes');
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
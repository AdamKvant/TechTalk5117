import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @tracked step = 1;
    @service router;

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

    numberOfSteps = this.chapters.length;
    
    transitionStep() {
        console.log('transitioning to step', this.step);
        this.router.transitionTo(this.chapters[this.step - 1]);
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
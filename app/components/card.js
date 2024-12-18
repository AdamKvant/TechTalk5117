import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Card extends Component {

    @tracked isFlipped = false;

    @action
    flip(event) {
        if (event.target.closest('.no-flip')) {
            return;
        }

        this.isFlipped = !this.isFlipped;
    }
    
}

import { Subject } from 'rxjs';

class Services {
    gameActionSubject = new Subject();
    currentLetter = null;
    currentLetterSubject = new Subject();

    constructor() {
        this.currentLetterSubject.subscribe(letter => {
            this.currentLetter = letter;
        });
    }
}

export default new Services();
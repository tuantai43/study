import { Subject } from 'rxjs';

const subject = new Subject();

export const notifyService = {
    sendNotify: (content, title, timer, type, icon) =>
        subject.next({ content, title, timer, type, icon }),
    clearNotifies: () => subject.next(),
    getNotify: () => subject.asObservable(),
};

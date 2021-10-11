import repository from './repository';

export class BaseRepository {
    constructor(resource) {
        this.resource = resource;
        this.get = () => repository.get(this.resource);
    }
}

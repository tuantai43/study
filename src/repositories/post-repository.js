import { BaseRepository } from './base-repository';

export class PostRepository extends BaseRepository {
    constructor() {
        super('/post');
    }
}

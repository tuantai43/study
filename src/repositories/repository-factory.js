import { PostRepository } from './post-repository';

const repositories = {
    posts: new PostRepository(),
};

const RepositoryFactory = {
    get: (name) => repositories[name],
};

export default RepositoryFactory;

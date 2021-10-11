<template>
    <base-tutorial-page title="Repository Factory"> </base-tutorial-page>
</template>
<script>
import RepositoryFactory from '../../../repositories/repository-factory';

export default {
    setup() {
        const postRepository = RepositoryFactory.get('posts');
        postRepository
            .get()
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    },
};
</script>

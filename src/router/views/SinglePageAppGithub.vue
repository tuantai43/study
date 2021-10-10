<template>
    <base-tutorial-page :title="label.title" :description="label.description">
        <h4>
            <a href="#why-its-necessary">Why it's necessary</a>
        </h4>
        GitHub Pages doesn't natively support single page apps. When there is a
        fresh page load for a url like
        <span class="badge">example.tld/foo</span>, where
        <span class="badge">/foo</span> is a frontend route, the GitHub Pages
        server returns 404 because it knows nothing of
        <span class="badge">/foo</span>.
        <p>
            Cre:
            <a
                href="https://github.com/rafgraph/spa-github-pages"
                class="text-primary">
                SPA Github Pages
            </a>
        </p>
    </base-tutorial-page>
</template>
<script>
export default {
    setup() {
        const label = {
            title: 'Single Page Apps for GitHub Pages',
            description:
                'This is a lightweight solution for deploying single page apps with <a class="text-primary" href="https://pages.github.com/" title="GitHub Pages">GitHub Pages.</a>',
        };
        return {
            label,
        };
    },
};
</script>

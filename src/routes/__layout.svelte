<script>
    import "../sass/styles.scss";
    import Nav from '$lib/Nav/Nav.svelte'
    
</script>


<style lang="scss">
    @import "../sass/util/index";
    main{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
</style>



<Nav/>
<main>
    <slot/>
</main>
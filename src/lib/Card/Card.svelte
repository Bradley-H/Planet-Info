<script>
    export let title = "";
    export let value = "";
    import "../../sass/styles.scss";
    import {fly} from 'svelte/transition'
</script>


<style lang="scss">
    @import "../../sass/util/index";
    .card{
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 14.5rem;
        max-width: 17rem;
        height: 5rem;
        border: 1px solid $subHeading;
        font-weight: bold;
        margin-top: toRem(15);
        overflow: hidden;

        .title{
            margin-top: toRem(11);
            text-align: center;
            width: 100%;
            p{
                color: $subHeading;
            }
        }

        .content{
            margin-top: toRem(9);
            text-align: center;
            width: 100%;
            h4{
                font-size: toRem(25);
            }
        }
    }
</style>


<div class="card">
    <div class="title">
        <p>{title}</p>
    </div>
    <div class="content" out:fly={{duration: 500, y: 200}} in:fly={{delay: 100, duration: 800, y: 200}}>
        <h4>{value}</h4>
    </div>
</div>
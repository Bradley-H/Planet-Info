<script lang="ts">
    export let title: string = "";
    export let value: string = "";
    import "../../sass/styles.scss";
    import {fly} from 'svelte/transition'
</script>


<style lang="scss">
    @import "../../sass/util/index";

    .title, .content{
        text-align: center;
        @extend %width-100;
    }

    .card{
        display: flex;
        flex-direction: column;
        text-align: start;
        width: 14.5rem;
        height: 5rem;
        border: 1px solid $subHeading;
        font-weight: bold;
        margin-top: toRem(15);
        overflow: hidden;
        @include tablet{
            width: 16rem;
        }

        .title{
            margin-top: toRem(11);
            p{
                color: $subHeading;
            }
        }

        .content{
            margin-top: toRem(9);
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
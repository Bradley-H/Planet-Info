<script>
    export let text = "";
    export let href = "";
    export let active = false
import { globalStore } from '../../stores/globalStore';
    import "../../sass/styles.scss";

$: path = $globalStore.currentPlanet; //shorten the markup to the globalStore
</script>


<style lang="scss">
    @import "../../sass/util/index";

    $map: (
        "Mercury": $mercury,
        "Venus": $venus,
        "Earth": $earth,
        "Mars": $mars,
        "Jupiter": $jupiter,
        "Saturn": $saturn,
        "Uranus": $uranus,
        "Neptune": $neptune,
    );


    button,a{
        @include centered;
        padding: 1.2rem 3rem 1.2rem .5rem;
        width: 14.5rem;
        color: white;
        font-size: 1.1rem;
        border: 1px solid $subHeading;
        transition: $primaryTransition;
        text-decoration: none;
        min-width: 155px;
        cursor: pointer;
        text-transform: capitalize;
        z-index: 3;
        margin-top: toRem(14);
        @include tablet{
            width: 16rem;
        }
        @include desktop{
            width: 20rem;

        }
        &:hover{
            background-color: $subHeading;
            color: white;
        }
        @each $planet, $color in $map {
            &.#{$planet}.active {
                background-color: $color;
            }
        }
    }
</style>

{#if !href}
<button on:click class="{path}" class:active={active}>{text}</button>
{:else}
<a href="{href}" on:click class="{path}" class:active={active}>{text}</a>
{/if}
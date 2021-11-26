<script lang="ts">
import { globalStore } from "../../stores/globalStore";

    export let text;
    import "../../sass/styles.scss";

    $: path = $globalStore.currentPlanet; //shorten the markup to GlobalStore //
</script>

<style lang="scss">
    @import "../../sass/util/index.scss";

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
    
    button {
        color: $subHeading;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin-right: toRem(13);
        text-decoration: none;
        font-weight: bold;
        margin-bottom: 0.5rem;
        transition: $primaryTransition;
        position: relative;
        @include tablet {
            font-size: 0.79rem;
        }
        @include desktop {
            margin-right: toRem(36);
            font-size: 0.85rem;
        }
        @each $planet, $color in $map {
            &.#{$planet}:hover,
            &.#{$planet}.active {
                color: $color;
            }
            &.#{$planet}.active::after,
            &.#{$planet}.nonActive::after{
                @extend %navLink;
                background: $color;
            }
            &.#{$planet}.active::after {
                @extend %bottom5;
            }
            &.#{$planet}.nonActive::after {
                @extend %bottom35;
            }
        }

    @keyframes NavLinkActiveAnimation {
        from {
            bottom: -2.5rem;
        }
        to {
            bottom: -1rem;
        }
        
    }

    @keyframes NavLinkActiveAnimationReverse {
        from {
            bottom: -.5rem;
            opacity: 1;
        }
        to {
            bottom: -5.5rem;
            opacity: 0;
        }
    }}
</style>

<button on:click={() => $globalStore.currentPlanet = text} class={text} class:nonActive={path !== text} class:active={path === text}>{text}</button>
<script>
    import { getData } from "../../stores/functionStore";
    import { globalStore } from "../../stores/globalStore";

    
function ToggleActive(){
    $globalStore.ModalActive = !$globalStore.ModalActive

    if ($globalStore.ModalActive) {
        document.querySelector("body").style.overflow = "hidden";
    } else {
        document.querySelector("body").style.overflow = "unset";
    }
}
</script>

<style lang="scss">
    @import "../../sass/util/index";

    $map: ("Mercury": $mercury, "Venus": $venus, "Earth": $earth, "Mars": $mars, "Jupiter": $jupiter, "Saturn": $saturn, "Uranus": $uranus, "Neptune": $neptune);
    .modal {
        display: flex;
        position: fixed;
        inset: 0;
        min-width: 110%;
        height: 100vh;
        background: lighten($color: $backgroundColor, $amount: 1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        justify-content: center;
        transform: translateX(-100%);
        transition: $primaryTransition;
        z-index: 11;
        &.active{
            transform: translateX(0%);
        }
        &-header {
            margin-bottom: 1rem;
        }
        &-body {
            @include centered;
            flex-direction: column;
            margin-top: 1.75rem;
        }
        &-content{
            margin-top: 2.5rem;
        }

        button {
            margin-bottom: toRem(66);
            text-decoration: none;
            color: $subHeading;
            font-weight: bold;
            font-family: $primaryFont;
            position: relative;
            cursor: pointer;
            font-size: 1rem;
            width: 100%;
            &:last-of-type {
                margin-bottom: 4rem;
            }
            @include tablet{
                font-size: 1.3rem;
            }
            @each $planet, $color in $map {
                &.#{$planet}::after {
                   @extend %modal;
                   background-color: $color;
                    @include tablet{
                        left: -.2rem;
                        top: 4px;
                    }
              }
                &.#{$planet}.active{
                    color: $color;
                }
            }
        }
    }
</style>



<aside class="modal" class:active={$globalStore.ModalActive}>
    <div class="modal-content">
        <div class="modal-header">
            <h2>THE PLANETS</h2>
        </div>
        <div class="modal-body">
            {#await getData()}
                <p />
            {:then planets}
                {#each planets as planet}
                    <button
                        class={planet.name}
                        on:click={ToggleActive}
                        on:click={() => $globalStore.currentPlanet = planet.name}>
                        {planet.name}
                    </button>
                {/each}
            {/await}
        </div>
    </div>
</aside>

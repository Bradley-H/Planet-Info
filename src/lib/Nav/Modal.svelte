<script>
    import { getData } from "../../stores/functionStore";
    import { globalStore } from "../../stores/globalStore";

    function ToggleActive() {
        $globalStore.ModalActive = false;
    }

</script>

<style lang="scss">
    @import "../../sass/util/index";
    .modal {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        min-width: 110%;
        height: 100vh;
        background: lighten($color: $backgroundColor, $amount: 1);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 2;
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
            height: 100vh;
            margin-top: 1.5rem;
            display: grid;
            grid-template-columns: 1fr;
            align-items: flex-start;
        }

        button {
            margin-bottom: 1rem; 
            text-decoration: none;
            color: $subHeading;
            font-weight: bold;
            font-family: $primaryFont;
            position: relative;
            cursor: pointer;
            &:last-of-type {
                margin-bottom: 3rem;
            }
            $map: ("Mercury": $mercury, "Venus": $venus, "Earth": $earth, "Mars": $mars, "Jupiter": $jupiter, "Saturn": $saturn, "Uranus": $uranus, "Neptune": $neptune);
            @each $planet, $color in $map {
                &.#{$planet}::after {
                    content: "";
                    width: toRem(22);
                    height: toRem(22);
                    border-radius: 50%;
                    background-color: $color;
                    position: absolute;
                    left: -2rem;
                    top: -1px;
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

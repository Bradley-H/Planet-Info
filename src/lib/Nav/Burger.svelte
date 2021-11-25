<script>
    import { globalStore } from "../../stores/globalStore";
    import Modal from "./Modal.svelte";
</script>


<style lang="scss">
    @import "../../sass/util/index";
    .burger {
        display: flex;
        flex-direction: column;
        height: auto;
        cursor: pointer;
        transition: $primaryTransition;
        transform-origin: center;
        width: toRem(34);
        position: absolute;
        right: toRem(19);
        top: $navHeight * 0.15;
        z-index: 12;
        @include desktop{
            display: none;
        }
        // ACTIVE STATE // - burger is active when menu is open
        &.active {
            transform: rotate(360deg) translateX(10px) translateY(10px);
            .line:nth-of-type(3) {
                opacity: 0;
            }
            .line:nth-of-type(2) {
                transform: rotate(45deg) translateX(-9px);
            }
            .line:nth-of-type(1) {
                transform: rotate(-45deg) translateX(-9px);
            }
        }
    }
    // DESIGN FOR THE LINES //
    .line {
        height: 6px;
        width: toRem(32);
        background-color: $subHeading;
        margin-top: 7px;
        transition: $primaryTransition;
    }
</style>


<div class="burger"
    class:active={$globalStore.ModalActive}
    on:click={() => ($globalStore.ModalActive = !$globalStore.ModalActive)}>
    <div class="line" />
    <div class="line" />
    <div class="line" />
</div>

<Modal/>
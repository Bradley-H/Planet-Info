<script>
    import { globalStore } from "../../stores/globalStore";
    import Modal from "./Modal.svelte";

    function active(){
        $globalStore.ModalActive = !$globalStore.ModalActive

        if($globalStore.ModalActive){
            document.querySelector("body").style.overflow = "hidden"
        } else {
            document.querySelector("body").style.overflow = "unset"

        }
    }
</script>


<style lang="scss">
    @import "../../sass/util/index";
    .burger {
        display: flex;
        flex-direction: column;
        height: auto;
        cursor: pointer;
        transition: $primaryTransition;
        width: toRem(34);
        z-index: 12;
        margin: 0 1rem 0 auto;
        @include tabletUp{
            display: none;
            margin: 0;
        }
        // ACTIVE STATE // - burger is active when menu is open
        &.active {
            transform: rotate(360deg) translateX(10px) translateY(1rem);
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
    on:click={active}>
    <div class="line" />
    <div class="line" />
    <div class="line" />
</div>

<Modal/>
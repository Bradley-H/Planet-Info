<script lang="ts">
    // COMPONENTS //
    import NavLink from "./NavLink.svelte";
    import Burger from "./Burger.svelte";
    // CONSTANTS //
    import {planets} from '../../constants/planets'
    // SASS  //
    import "../../sass/styles.scss";
</script>

<style lang="scss">
    @import "../../sass/util/index.scss";

    nav{
        @include centered;
        background-color: $backgroundColor;
        background-image: url("/assets/background-stars.svg");
        @extend %width-100;
        border-bottom: 1px solid $subHeading;
        overflow: hidden;
        height: $navHeight;
        @include tabletUp{
            justify-content: flex-start;
        }
        @include desktop{
            flex-direction: row;
            padding-bottom: 1rem;
        }

        h1{
            @include centered;
            margin: 1rem auto 0 1rem;
            font-family: $secondaryFont;
            font-size: 2rem;
            color: white;
            @include desktop{
                font-size: 2.2rem;
                margin: 1.5rem 0 0 1rem;
            }
        }

        .planet-links{
            display: none;
            align-items: center;
            margin-top: 1.5rem;
            @include tabletUp{
                display: flex;
                margin: 1rem 1rem 0 auto;
            }
            @include tablet{
                justify-content: space-evenly;
            }
            @include desktop{
                margin: 1.5rem 0 0 auto;
        }
    }
    }
</style>

<nav>
    <h1>THE PLANETS</h1>
    <div class="planet-links">
            {#each planets as planet (planet.id)}
                <NavLink text={planet.name} />
            {/each}
    </div>
    <Burger />
</nav>

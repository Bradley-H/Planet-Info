<script lang="ts">
    // COMPONENTS //
    import NavLink from "./NavLink.svelte";
    import Burger from "./Burger.svelte";
    // FUNCTIONS //
    async function getData(){
    const res = await fetch('./json/data.json')
    const data = await res.json();
    return data;
}
    // SASS  //
    import "../../sass/styles.scss";
</script>

<style lang="scss">
    @import "../../sass/util/index.scss";

    nav{
        display: flex;
        background-color: $backgroundColor;
        background-image: url("/assets/background-stars.svg");
        flex-direction: column;
        width: 100%;
        border-bottom: 1px solid $subHeading;
        padding-bottom: 1.5rem;
        overflow: hidden;
        height: $navHeight;
        @include desktop{
            flex-direction: row;
            padding-bottom: 1rem;
        }

        h1{
            @include centered;
            margin-top: 1rem;
            font-family: $secondaryFont;
            font-size: 2rem;
            color: white;
            @include desktop{
                font-size: 2.2rem;
                margin-left: 1rem;
                margin-top: 1.5rem;
            }
        }

        .planet-links{
            display: none;
            align-items: center;
            margin-top: 1.5rem;
            @include tabletUp{
                display: flex;
            }
            @include tablet{
                justify-content: space-evenly;
            }
            @include desktop{
                margin-left: auto;
        }
    }
    }
</style>

<Burger/>
<nav>
    <h1>THE PLANETS</h1>
    <div class="planet-links">
        {#await getData()}
        <p>Getting Planets.....</p>
    {:then planets}
        {#each planets as planet}
            <NavLink text={planet.name}/>
        {/each}
    {/await}
    </div>
</nav>


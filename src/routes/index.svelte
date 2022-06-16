<script lang="ts">
    // SVELTE IMPORTS //
    import { fly, fade } from "svelte/transition";
    // COMPONENTS //
    import Button from "$lib/Button/Button.svelte";
    import Card from "$lib/Card/Card.svelte";
    import Nav from "$lib/Nav/Nav.svelte";
    // STORES //
    import { globalStore } from "../stores/globalStore";
    import { getData } from "../stores/functionStore";
    // OBJECTS //
    let details = [
        // what information to be displayed //
        { id: 0, content: "overview", image: "planet" },
        { id: 1, content: "structure", image: "internal" },
        { id: 2, content: "geology" },
    ];
    // REACTIVE VALUES //
    $: path = $globalStore.currentPlanet; // shorten the markup
    $: content = "overview"; // What content to display about the planet //
    $: imageType = "planet"; // what image to display //
</script>

<style lang="scss">
    @import "../sass/util/index";

    section, .planetInfo, img, .information, .cards{
        display: grid;
    }
    section {
        place-items: center;
        justify-content: center;
        width: 100%;
        position: relative;
        .planet {
            @include centered;
            flex-direction: column;
            text-align: center;
            margin-top: 0.5rem;
            height: 100%;
            position: relative;
            @include desktop {
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin-bottom: 1.5rem;
            }
            .geology {
                position: absolute;
                width: 120px;
                top: 18%;
                @include tablet {
                    top: 23%;
                }
                @include desktop {
                    top: 45%;
                }
            }
            img {
                max-width: toRem(300);
                margin-top: 2rem;
                place-self: center;
                @include tablet {
                    max-width: toRem(320);
                }
                @include desktop {
                    max-width: toRem(380);
                }
            }
            .information {
                grid-template-columns: 1fr;
                text-align: center;
                max-height: 100%;
                margin-top: 1rem;
                @include tablet {
                    grid-template-columns: 1fr 1fr;
                }
                h4 {
                    @include centered;
                    width: 90%;
                    min-height: 11rem;
                    @include desktop {
                        min-height: 6rem;
                    }
                }

                h1 {
                    @include desktop {
                        font-size: 4rem;
                    }
                }
                .text {
                    @include centered;
                    flex-direction: column;
                    color: white;
                    text-decoration: none;
                    line-height: 24px;
                    margin-top: 0.75rem;
                    a {
                        display: flex;
                        margin-top: 0.5rem;
                        color: $subHeading;
                        font-weight: bold;
                        text-decoration: underline;
                        span {
                            font-weight: 400;
                            text-decoration: none;
                        }
                        img {
                            margin: 0 0 0 0.5rem;
                        }
                    }
                }
                .btns {
                    @include centered;
                    flex-direction: column;
                    width: 100%;
                }
            }
        }
    }

    .cards {
        place-items: center;
        grid-template-columns: 1fr;
        max-height: 102%;
        margin-top: 1.5rem;
        margin-bottom: 2.5rem;
        width: 100%;
        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }
        @include desktop {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>

<Nav/>
<main>
<section>
    {#await getData(path)}
    <p>Getting Planet Information, Please wait.....</p>
    {:then planet}
        <div class="planet" >
            <div
                class="planetInfo" in:fly={{ duration: 1000, delay: 300, x: -300 }}>
                {#if content !== "geology"}
                    <img src={planet.images[imageType]} alt={planet.name} />
                {:else}
                    <img src={planet.images.planet} alt={planet.name} />
                    <img
                    in:fly={{ duration: 500, delay: 250, y: 100 }}
                        class="geology"
                        src={planet.images.geology}
                        alt={planet.name}
                    />
                {/if}
            </div>

            <div class="information">
                <div class="planet-info">
                    <h1 in:fade={{ delay: 1000 }}>{planet.name}</h1>
                    <div class="text" in:fade={{ delay: 1000 }}>
                        <h4>{planet[content].content}</h4>
                        <a href={planet[content].source}><span>Source:</span> Wikipedia
                            <img src="./assets/icon-source.svg" alt="icon" /></a>
                    </div>
                </div>
                <div class="btns">
                    {#each details as detail (detail.id)}
                        <Button
                            on:click={() => content = detail.content}
                            on:click={() => (imageType = detail.image)}
                            active={content === detail.content}
                            text={detail.content}/>
                    {/each}
                </div>
            </div>
        </div>
        <div class="cards">
            <Card title={"Rotation Time"} value={planet.rotation} />
            <Card title={"Revolution Time"} value={planet.revolution} />
            <Card title={"Planet Radius"} value={planet.radius} />
            <Card title={"Average Temperature"} value={planet.temperature} />
        </div>
    {/await}
</section>
</main>
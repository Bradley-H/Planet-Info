<script lang="ts">
    // SVELTE IMPORTS //
    import { fly, fade } from "svelte/transition";
    // COMPONENTS //
    import Button from "$lib/Button/Button.svelte";
    import Card from "$lib/Card/Card.svelte";
    // STORES //
    import { globalStore } from "../stores/globalStore";
    // OBJECTS //
    let details = [  // what information to be displayed //
        { id: 0, content: "overview", image: "planet"},
        { id: 1, content: "structure", image: "internal" },
        { id: 2, content: "geology", image: "geology" },
    ];



    // REACTIVE VALUES //
    $: path = $globalStore.currentPlanet; // shorten the markup
    let content = "overview"; // What content to display //
    let imageType = "planet" // what image to display //
    // FUNCTIONS //
    function toggle(id: string) {
        content = id;
    }
    async function getPlanetData(path) {
        content = "overview";
        imageType = "planet";
        const res = await fetch("./json/data.json");
        const data = await res.json();
        let info = data.find((item) => {
            return item.name === path;
        });
        return info;
    }

    $: console.log(content);
</script>

<style lang="scss">
    @import "../sass/util/index";

    section {
        display: grid;
        place-items: center;
        justify-content: center;
        width: 100%;
        position: relative;
        .planet {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin-top: 0.5rem;
            height: 100%;
            position: relative;
            @include desktop {
                display: grid;
                grid-template-columns: 1fr 1fr;
                margin-bottom: 1.5rem;
            }
            .planetInfo{
                display: grid;
            }
            .geology {
                position: absolute;
                    width: 120px;
                    top: 22%;
                    @include tablet{
                        top: 28%
                    }
                    @include desktop{
                        top: 55%
                    }
            }
            img {
                display: grid;
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
                display: grid;
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
                        margin-top: 0.5rem;
                        color: $subHeading;
                        font-weight: bold;
                        text-decoration: underline;
                        span {
                            font-weight: 400;
                            text-decoration: none;
                        }
                    }
                }
                .btns {
                    @include centered;
                    flex-direction: column;
                    width: 95%;
                    @include tablet {
                        width: 100%;
                    }
                    @include desktop {
                        width: 100%;
                    }
                }
            }
        }
    }

    .cards {
        display: grid;
        place-items: center;
        grid-template-columns: 1fr;
        max-height: 102%;
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        width: 100%;
        @include tablet {
            grid-template-columns: repeat(2, 1fr);
        }
        @include desktop {
            grid-template-columns: repeat(4, 1fr);
        }
    }
</style>


<section>
    {#await getPlanetData(path)}
        <p></p>
    {:then planet}
        <div class="planet">
            <div class="planetInfo">
                {#if content !== "geology"}
                    <img src={planet.images[imageType]} alt="{planet.name}" />
                {:else}
                    <img src={planet.images.planet} alt="{planet.name}" />
                    <img class="geology" src={planet.images.geology} alt="{planet.name}" />
                {/if}
            </div>
            
            <div class="information">
                <div class="planet-info">
                    <h1>{planet.name}</h1>
                    <div class="text">
                        <h4>{planet[content].content}</h4>
                        <a href={planet[content].source}><span>Source:</span> Wikipedia</a>
                    </div>
                </div>
                <div class="btns">
                    {#each details as detail (detail.id)}
                        <Button
                            on:click={() => toggle(detail.content.toLowerCase())}
                            on:click={() => imageType = detail.image}
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

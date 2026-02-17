<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly, fade } from "svelte/transition";
</script>

<SlideTransition>
    <h2 class="slide-title">Executive Summary</h2>

    <div class="slide-content">
        <h3 class="vision-title" in:fly={{ x: -50, duration: 600, delay: 200 }}>
            My Vision: Fitness as a Live Game
        </h3>

        <ul class="points">
            <li in:fly={{ x: 50, duration: 500, delay: 400 }}>
                <span class="bullet">Create a World</span>
                <p>
                    Commit isn't just a tracker — it's a world where sweat meets
                    social currency. I want to make every rep feel like a boss
                    fight.
                </p>
            </li>
            <li in:fly={{ x: 50, duration: 500, delay: 600 }}>
                <span class="bullet">Lifestyle Brand</span>
                <p>
                    I'll position Commit as a lifestyle movement, transforming
                    the "solo grind" into a collective obsession people can't
                    stop talking about.
                </p>
            </li>
            <li in:fly={{ x: 50, duration: 500, delay: 800 }}>
                <span class="bullet">Narrative-Driven Growth</span>
                <p>
                    Every post, every reel, every ad — I craft them as stories,
                    not content. Because communities rally around narratives,
                    not campaigns.
                </p>
            </li>
        </ul>

        <p class="sign-off" in:fade={{ duration: 800, delay: 1200 }}>
            — Keshav Varshney
        </p>
    </div>
</SlideTransition>

<style>
    .vision-title {
        font-size: 2.2rem;
        margin-bottom: 2rem;
        color: var(--text-dark);
    }

    .points {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    li {
        background: white;
        padding: 1.5rem 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        border-left: 6px solid var(--primary);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .bullet {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.15rem;
        color: var(--text-dark);
        margin: 0;
        line-height: 1.5;
    }

    .sign-off {
        margin-top: 1.5rem;
        font-style: italic;
        color: var(--primary);
        font-weight: 600;
        font-size: 1.2rem;
        text-align: right;
    }
</style>

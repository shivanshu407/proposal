<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fly } from "svelte/transition";
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
                    Commit isn't just a tracker; it's a world where sweat meets
                    social currency.
                </p>
            </li>
            <li in:fly={{ x: 50, duration: 500, delay: 600 }}>
                <span class="bullet">Lifestyle Brand</span>
                <p>
                    Positioning Commit as a lifestyle, transforming the "solo
                    grind" into a collective obsession.
                </p>
            </li>
            <li in:fly={{ x: 50, duration: 500, delay: 800 }} class="personal">
                <span class="bullet">Personal Touch</span>
                <p>"I don't just build campaigns; I build narratives."</p>
            </li>
        </ul>
    </div>
</SlideTransition>

<style>
    .vision-title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
        color: var(--text-dark);
    }

    .points {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    li {
        background: white;
        padding: 2rem;
        border-radius: 12px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        border-left: 6px solid var(--primary);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .bullet {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    p {
        font-size: 1.4rem;
        color: var(--text-dark);
        margin: 0;
        line-height: 1.5;
    }

    .personal {
        background: #fdf5ff;
        border-left-color: #d680ff;
    }

    .personal p {
        font-style: italic;
    }
</style>

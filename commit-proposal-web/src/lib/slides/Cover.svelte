<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fade, fly } from "svelte/transition";
</script>

<SlideTransition>
    <div class="logo-box" in:fly={{ y: -50, duration: 800 }}>COMMIT API</div>

    <h1 class="title" in:fly={{ y: 50, duration: 800, delay: 200 }}>
        Strategic Growth Proposal
    </h1>

    <p class="subtitle" in:fade={{ duration: 1000, delay: 600 }}>
        Use Motion. Join the Tournament. Live the Game.
    </p>

    <div class="meta" in:fade={{ duration: 1000, delay: 1000 }}>
        <p>Prepared for Commit AI</p>
        <p class="author">By Keshav Varshney</p>
    </div>
</SlideTransition>

<style>
    .logo-box {
        border: 4px solid var(--primary);
        padding: 1rem 2rem;
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--primary);
        margin-bottom: 3rem;
        border-radius: 8px;
    }

    .title {
        font-size: 4.5rem;
        font-weight: 800;
        background: linear-gradient(135deg, #1a0b2e 0%, #a500fd 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 1rem;
        text-align: center;
        line-height: 1.1;
    }

    .subtitle {
        font-size: 1.8rem;
        color: var(--text-dark);
        opacity: 0.8;
        font-weight: 300;
        margin-bottom: 4rem;
        text-align: center;
    }

    .meta {
        text-align: center;
        color: var(--text-light);
    }

    .author {
        font-weight: 600;
        color: var(--primary);
        margin-top: 0.5rem;
    }
</style>

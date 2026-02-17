<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { fade, fly } from "svelte/transition";
</script>

<SlideTransition>
    <img
        src="/logo.png"
        alt="Commit Logo"
        class="logo"
        in:fly={{ y: -50, duration: 800 }}
    />

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
    .logo {
        width: 120px;
        height: auto;
        margin-bottom: 2rem;
        filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
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

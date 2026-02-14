<script>
    import SlideTransition from "$lib/components/SlideTransition.svelte";
    import { scale } from "svelte/transition";
</script>

<SlideTransition>
    <div class="center-content">
        <h1 in:scale={{ duration: 1000, start: 0.8 }}>
            Let's Build This World.
        </h1>
        <p in:scale={{ duration: 1000, delay: 500, start: 0.9 }}>
            Ready to Commit?
        </p>
    </div>
</SlideTransition>

<style>
    .center-content {
        text-align: center;
    }

    h1 {
        font-size: 6rem;
        font-weight: 800;
        color: var(--primary);
        margin-bottom: 2rem;
        letter-spacing: -2px;
    }

    p {
        font-size: 3rem;
        color: var(--text-dark);
        font-weight: 300;
    }
</style>

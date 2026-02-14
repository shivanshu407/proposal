<script>
    import { onMount } from 'svelte';
    import { presentation } from '$lib/presentation.svelte.js';
    
    import Cover from '$lib/slides/Cover.svelte';
    import ExecutiveSummary from '$lib/slides/ExecutiveSummary.svelte';
    import SMMPipeline from '$lib/slides/SMMPipeline.svelte';
    import Deliverables from '$lib/slides/Deliverables.svelte';
    import ContentStrategy from '$lib/slides/ContentStrategy.svelte';
    import PerformanceMarketing from '$lib/slides/PerformanceMarketing.svelte';
    import Closing from '$lib/slides/Closing.svelte';

    import '../app.css';

    const slides = [
        Cover,
        ExecutiveSummary,
        SMMPipeline,
        Deliverables,
        ContentStrategy,
        PerformanceMarketing,
        Closing
    ];

    function handleKeydown(event) {
        if (event.key === 'ArrowRight' || event.key === 'Space') {
            presentation.next();
        } else if (event.key === 'ArrowLeft') {
            presentation.prev();
        }
    }

    $effect(() => {
        // Any side effects when slide changes
    });
</script>

<svelte:window onkeydown={handleKeydown} />

<main class="presentation-wrapper">
    {#key presentation.currentSlide}
        <svelte:component this={slides[presentation.currentSlide]} />
    {/key}

    <div class="controls">
        <button onclick={() => presentation.prev()} disabled={presentation.currentSlide === 0}>←</button>
        <span class="slide-counter">{presentation.currentSlide + 1} / {slides.length}</span>
        <button onclick={() => presentation.next()} disabled={presentation.currentSlide === slides.length - 1}>→</button>
    </div>
</main>

<style>
    :global(body) {
        margin: 0;
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
        background: white;
        color: #333;
    }

    .presentation-wrapper {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }

    .controls {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        display: flex;
        gap: 1rem;
        align-items: center;
        z-index: 100;
        background: rgba(255, 255, 255, 0.9);
        padding: 0.5rem 1rem;
        border-radius: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }

    button {
        background: #a500fd;
        color: white;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        transition: transform 0.2s;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover:not(:disabled) {
        transform: scale(1.1);
    }

    button:disabled {
        background: #ccc;
        cursor: not-allowed;
    }

    .slide-counter {
        font-weight: 600;
        min-width: 50px;
        text-align: center;
    }
</style>

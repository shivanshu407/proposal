<script>
    import { fly, fade } from 'svelte/transition';
    
    let { children } = $props();
</script>

<div in:fly={{ x: 200, duration: 400, delay: 200 }} out:fade={{ duration: 200 }} class="slide-container">
    {@render children()}
</div>

<style>
    .slide-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 4rem;
        box-sizing: border-box;
    }
</style>

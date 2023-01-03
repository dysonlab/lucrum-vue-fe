<template>
    <header>
        <div class="title-container"></div>
        <img class="title-image" src="@/assets/icon0_lucrum.png" alt="">
        <h1 href="#" class="title-text">lucrum</h1>
    </header>
</template>

<script>

</script>

<style lang="scss">
    header{
        display: flex;
        background-color: #ffffff;
        padding: 1rem 0 1rem 0;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
        widows: 100%;
        .title-image{
            width: 1.5rem;
            height: 1.5rem;
            margin: 0 0 0 2.5rem;
        }
        .title-text{
            font-family: "Cabin", sans-serif;
            font-size: 1rem;
            font-weight: 600;
            color: var(--color-primary);
            margin: 0.2rem 0 0 0.5rem;
        }
    }
</style>
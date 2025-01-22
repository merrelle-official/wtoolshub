<script setup lang="ts">

</script>

<template>
<main class="main">
    <h1>Привет, юзер</h1>
    <div class="main__text">
        <p>Сервис WToolsHub - это сборище полезных инструментов на каждый день, ассортимент будет периодически пополняться.</p>
    </div>
</main>
</template>

<style scoped>
h1{
    font-size: 60px;
}
p{
    font-size: 20px;
    text-align: center;
}

.main{
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
}

.main__text{
    width: 50%;
}
</style>
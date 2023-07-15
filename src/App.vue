<template>
    <router-view/>
</template>
<script setup>
    import useAutoResize from '@/hooks/AutoResize';

    //页面自适应
    useAutoResize(1920, 1080);


</script>

<style>

</style>

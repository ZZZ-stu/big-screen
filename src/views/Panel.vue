<template>
    <div class="panel">
        <div class="panel-header"></div>
        <div class="left-top"></div>
        <div class="left-bottom"></div>
        <div class="center-top"></div>
        <div class="center-bottom"></div>
        <div class="right-top"></div>
        <div class="right-middle"></div>
        <div class="right-bottom"></div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
    .panel {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #070a3c;
        background-image: url(@/asset/images/bg.png);

        .panel-header {
            position: absolute;
            top: 21px;
            left: 0;
            height: 56px;
            width: 100%;
            background: url("@/asset/images/bg_header.svg");
        }

        .left-top {
            position: absolute;
            left: 16px;
            top: 116px;
            width: 536px;
            height: 443px;
            background-image: url("@/asset/images/bg_left_top.svg");
        }

        .left-bottom {
            position: absolute;
            left: 16px;
            bottom: 49px;
            width: 536px;
            height: 443px;
            background-image: url("@/asset/images/bg_left_bottom.svg");
        }

        .center-top {
            position: absolute;
            right: 540px;
            bottom: 272px;
            width: 823px;
            height: 710px;
        }

        .center-bottom {
            position: absolute;
            right: 540px;
            bottom: 49px;
            width: 823px;
            height: 209px;
            background-image: url("@/asset/images/bg_bottom.svg");
        }

        .right-top {
            position: absolute;
            right: 17px;
            top: 96px;
            width: 519px;
            height: 327px;
            background-image: url("@/asset/images/bg_right_top.svg");
        }

        .right-middle {
            position: absolute;
            right: 17px;
            top: 443px;
            width: 519px;
            height: 327px;
            background-image: url("@/asset/images/bg_right_center.svg");
        }

        .right-bottom {
            position: absolute;
            right: 17px;
            bottom: 49px;
            width: 519px;
            height: 242px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("@/asset/images/bg_right_bottom.svg");
        }
    }

</style>

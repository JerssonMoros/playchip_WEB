<script>
</script>

<template>
    <button data-label="Register" class="rainbow-hover text-uppercase">
        <span class="sp">Iniciar sesión</span>
    </button>
</template>


<style>
    .rainbow-hover {
    font-size: 12px;
    font-weight: 700;
    color: #ff7576;
    background-color: #1b1919;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 8px 12px;
    position: relative;
    line-height: 24px;
    border-radius: 9px;
    box-shadow: 0px 1px 2px rgb(78, 80, 88),
        0px 4px 16px rgb(78, 80, 88);
    transform-style: preserve-3d;
    transform: scale(var(--s, 1)) perspective(600px)
        rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
    perspective: 600px;
    transition: transform 0.1s;
    }
    .rainbow-hover:hover{
        background-color: #1a1a1a8a;
        box-shadow: 0px 1px 2px rgb(185, 187, 196),
        0px 4px 16px rgb(185, 187, 196);
    }

    .sp {
    background: linear-gradient(
        90deg,
        #866ee7,
        #ea60da,
        #ed8f57,
        #fbd41d,
        #2cca91
        );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    display: block;
    }

    .rainbow-hover:active {
    transition: 0.3s;
    transform: scale(0.93);
    }
</style>
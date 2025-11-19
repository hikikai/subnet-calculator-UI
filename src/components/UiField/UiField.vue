<template>
    <div :class="$style.FormItem">
        <label :v-if="props.label" :class="$style.label">{{ label }}</label>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">



interface IProps{
    label: string;
}

const props = withDefaults(defineProps<IProps>(), {
    label: ''
})
</script>

<style module lang="scss">
.FormItem{
    width: 214px;
}

.label{
    color: var(--color-gray-dark);
}

</style>
<template>
    <select :class="$style.select" :value="$props.modelValue" :disabled="$props.isDisabled" @change="userChange">
        <option v-for="option in $props.options" :key="option" :value="option">
            {{ option }}
        </option>
    </select>
</template>

<script setup lang="ts">

interface IProps{
    modelValue: string;
    isDisabled?: boolean;
    options: string[];
}

interface IEmit {
  (e: 'update:modelValue', value: string): void; //Сам emit update:ModelValue, возвращает значение string 
}

const props = withDefaults(defineProps<IProps>(), {
})

const emit = defineEmits<IEmit>();

const userChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    emit('update:modelValue', target.value)
}
</script>

<style module lang="scss">
.select{
    position: relative;
    display: inline-flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    background-color: var(--color-gray-light);
    color: var(--color-gray-darker);
    padding: 8px 16px;
    border: 2px solid var(--color-primary);
    border-radius: 16px;
    font-size: 1rem;
    line-height: 1.5;
    height: 40px;
    cursor: pointer;

    &:disabled{
        cursor: not-allowed;
        border-color: var(--color-gray);
    }
}
</style>

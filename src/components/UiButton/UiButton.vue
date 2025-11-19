<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">

.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 16px 32px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border: 2px solid var(--color-black);
  border-radius: 16px;
  cursor: pointer;

  &[data-layout='secondary'] {
    border: 2px solid var(--color-gray-light);
    color: var(--color-primary);
    background-color: var(--color-gray);
  }

  &:hover:not(:disabled){
  border: 2px solid var(--color-primary);
  background-color: var(--color-gray-dark);
  }

  &:disabled{
    border: 2px solid var(--color-gray-light);
    color: var(--color-gray-light);
    background-color: var(--color-gray);
    cursor: not-allowed;
  }
  
  &:active:not(:disabled){
    color: var(--color-gray);
    background-color: var(--color-gray-darker);
  }

  &[data-layout='secondary']:hover:not(:disabled){
  border: 2px solid var(--color-gray-light);
  background-color: var(--color-gray-dark);
  color: var(--color-gray-light)
  }

  &[data-layout='secondary']:active:not(:disabled){
    color: var(--color-gray);
    background-color: var(--color-gray-darkest);
  }

  &[data-layout='secondary']:disabled{
    border: 2px solid var(--color-gray-light);
    color: var(--color-gray-light);
    background-color: var(--color-gray-dark);
    cursor: not-allowed;
  }
}


</style>

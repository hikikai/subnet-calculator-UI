<template>
    <input 
        :class="$style.input" 
        :disabled="$props.isDisabled" 
        :placeholder="$props.placeholder"
        :value="$props.modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"  
        />                                                                          <!--value меняет значение в самом инпуте, 
                                                                                    @input отправляет родителю через эмит, что нужно обновить переменную--> 
</template>

<script setup lang="ts">
interface IProps{
    modelValue: string;
    isDisabled?: boolean;
    placeholder: string;
}

const props = withDefaults(defineProps<IProps>(), {
    placeholder: 'Введите текст',
    modelValue: '',
});

const emit = defineEmits<{                 //Сам emit update:ModelValue, возвращает значение string 
    'update:modelValue': [value: string]
}>();
</script>

<style module lang="scss">

.input{
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

    &:focus::placeholder{
        visibility: hidden;
    }
}
</style>
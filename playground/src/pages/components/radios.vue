<script setup>
import {ref} from 'vue';

const breadcrumbs = ref([
  {
    to: '/cms',
    title: 'Dashboard',
  },
  {
    to: '/cms/components',
    title: 'Components',
  },
  {
    to: '/cms/components/radios',
    title: 'v-radio',
  },
]);
</script>

<template>
  <DocsTitle :breadcrumbs="breadcrumbs">Radio</DocsTitle>

  <Docs title="Default" :code="`<v-radio label=&quot;Choose&quot; />`">
    <template #preview>
      <v-radio label="Choose" />
    </template>
  </Docs>
</template>

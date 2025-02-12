# Dropdown

Dropdown component based on Headless UI.

## Usage

### Basic Usage

```vue
<script setup lang="ts">
import {ref} from 'vue';

const items = ref([
  {
    text: 'Item 1',
  },
  {
    text: 'Item 2',
  },
  {
    divider: true,
  },
  {
    text: 'Item 3',
  },
  {
    text: 'Item 4',
  },
]);
</script>

<template>
  <VDropdown :items="items" />
</template>
```

<LivePreview src="components-dropdown--default" />

::: info
The `VDropdown` component is registered globally when you install with `@gits-id/ui`. So you don't need to import it manually.
:::

### Right

```vue
<template>
  <VDropdown right />
</template>
```

<LivePreview src="components-dropdown--right" />

### Top

```vue
<template>
  <VDropdown top />
</template>
```

<LivePreview src="components-dropdown--top" />

### Router Link

```vue
<template>
  <VDropdown />
</template>
```

<LivePreview src="components-dropdown--router-link" />

### Href Link

```vue
<template>
  <VDropdown />
</template>
```

<LivePreview src="components-dropdown--href" />

### Slots

```vue
<script setup lang="ts">
import {Dropdown, DropdownItem} from '@gits-id/dropdown';
</script>

<template>
  <Dropdown>
    <DropdownItem text="Calendar" icon="calendar" />
    <DropdownItem text="Files" icon="document" />
    <DropdownItem divider />
    <DropdownItem text="Timer" icon="clock" />
  </Dropdown>
</template>
```

<LivePreview src="components-dropdown--slots" />

### Custom Activator

```vue
<template>
  <Dropdown top top-class="bottom-12">
    <template #activator>
      <DropdownButton :as="Button" color="error" outlined>
        My Button
      </DropdownButton>
    </template>

    <DropdownItem text="Calendar" icon="calendar" />
    <DropdownItem text="Files" icon="document" />
    <DropdownItem divider />
    <DropdownItem text="Timer" icon="clock" />
  </Dropdown>
</template>
```

<LivePreview src="components-dropdown--custom-activator" />

## Props

| Name                                        | Type                  | Default                  |
| ------------------------------------------- | --------------------- | ------------------------ |
| [`modelValue`](#modelValue)                 | `boolean`             | `false`                  |
| [`btnProps`](#btnProps)                     | `Record<string, any>` | `{variant: 'secondary'}` |
| [`label`](#label)                           | `string`              | `'Options'`              |
| [`right`](#right)                           | `boolean`             | `false`                  |
| [`items`](#items)                           | `DropdownItemProps[]` | `[]`                     |
| [`top`](#top)                               | `boolean`             | `false`                  |
| [`topClass`](#topClass)                     | `string`              | `'bottom-10'`            |
| [`bottomClass`](#bottomClass)               | `string`              | `'top-6'`                |
| [`panelClass`](#panelClass)                 | `string`              | `''`                     |
| [`buttonWrapperClass`](#buttonWrapperClass) | `string`              | `''`                     |
| [`rightClass`](#rightClass)                 | `string`              | `'left-0'`               |
| [`leftClass`](#leftClass)                   | `string`              | `'right-0'`              |
| [`transition`](#transition)                 | `string`              | `'fade'`                 |

## Methods

None

## Events

None

## Slots

### `activator`

```vue
<template>
  <Dropdown>
    <template #activator>
      <DropdownButton :as="Button" color="error" outlined>
        My Button
      </DropdownButton>
    </template>
  </Dropdown>
</template>
```

## CSS Variables

None

## Manual Installation

You can also install the `Dropdown` component individually via `@gits-id/dropdown` package:

```bash
yarn install @gits-id/dropdown
```

```vue
<script setup lang="ts">
import VDropdown from '@gits-id/dropdown';
</script>

<template>
  <VDropdown />
</template>
```

## Storybook

View Storybook documentation [here](https://gits-ui.web.app/?path=/story/components-dropdown--default).

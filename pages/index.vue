<template>
  <UAccordion color="blue" variant="solid" :items="items">
    <template #item="{ item, index, open }">
      <component :is="item.component"></component>
    </template>
  </UAccordion>
</template>

<script setup lang="ts">
import ModulClassroomCreateCard from "../components/ModulClassroomCreateCard.vue";
import InfoClassromCreateCard from "../components/InfoClassromCreateCard.vue";
import SpecialClassromCreateCard from "../components/SpecialClassromCreateCard.vue";
import EventClassroomCreateCard from "../components/EventClassroomCreateCard.vue";

import data from "../data.json";

const items = [
  {
    label: "Modul-Classroom",
    icon: "i-heroicons-academic-cap",
    component: ModulClassroomCreateCard,
  },
  {
    label: "Info-Classroom",
    icon: "i-heroicons-information-circle",
    component: InfoClassromCreateCard,
  },
  {
    label: "Special Classroom",
    icon: "i-heroicons-light-bulb",
    component: SpecialClassromCreateCard,
  },
  {
    label: "Event Classroom",
    icon: "i-heroicons-calendar-days",
    component: EventClassroomCreateCard,
  },
];
</script>

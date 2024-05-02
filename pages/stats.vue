<template>
  <UCard>
    <template #header>
      <p class="font-bold text-[2rem]">Statistic:</p>
    </template>
    <div class="font-bold leading-10">
      <div>Total Courses: 85</div>
      <div>Active Courses: 12</div>
      <div>Archived Courses: 60</div>
      <div>Provisioned Courses: 3</div>
      <div>Declined Courses: 10</div>
      <div>Courses Belonging To Classroom Admin: 12</div>
      <div>Courses Older Than 2 Years: 7</div>
      <div>Courses Updated Longer Than 2 Years Ago: 5</div>
    </div>
    <template #footer>
      Copyright Daran Dachte © {{ new Date().getFullYear() }}
    </template>
  </UCard>
</template>

<script lang="ts" setup></script>

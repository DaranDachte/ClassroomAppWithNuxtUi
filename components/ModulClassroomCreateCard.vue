<template>
  <UCard class="font-bold">
    <template #header>

      <h1 class=" text-[1.2rem] ">Classroom erstellen</h1>
      <p>Standard-MODUL-Classrooms werden von der Studienorgansiation zu beginn eines Trimester erstellt. Sie fassen
        alle Personen zusammen die an diesem Modul teilnehmen.</p>
    </template>






    <UContainer class="flex justify-between">

      <div class="flex flex-col justify-between  w-1/2">

        <div class="mb-5 flex flex-col">
          <label class="font-bold " for="moduleClassroomModuleNumber">Modulnummer</label>
          <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] "
            placeholder=" Z.b. XXX 123" v-model="moduleClassroomModuleNumber" required />

          <!-- <label class="font-bold " for="moduleClassroomModuleNumber">Modulnummer</label>
          <input type="text" class="border-b border-blue-500 outline-none  text-[#007FFF] "
            v-model="moduleClassroomModuleNumber" " required /> -->
        </div>

        <div class="mb-5 flex flex-col">
          <label class="font-bold " for="moduleClassroomModuleNumber">Modulname</label>
          <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] "
            placeholder="Name des moduls" v-model="moduleClassroomName" required />

          <!--  <label class=" font-bold " for=" moduleClassroomName"></label>
          <input type="text" class="border-b border-blue-500 outline-none  text-[#007FFF]" v-model="moduleClassroomName"
            placeholder="" required /> -->
        </div>
      </div>
      <div class="flex flex-col justify-between  ml-5 w-1/2">
        <div class="mb-5 flex flex-col">
          <div class="mb-5 flex flex-col">
            <label class=" font-bold " for="moduleClassroomTrimester">Trimestr</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] " placeholder="TM XXXX"
              v-model="moduleClassroomTrimester" required />

            <!--  <input type="text" class="border-b border-blue-500 outline-none  text-[#007FFF]"
              v-model="moduleClassroomTrimester" placeholder="TM XXXX" required /> -->
          </div>
          <label class="font-bold " for="moduleClassroomVpShort">VpKurzel</label>
          <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] " placeholder="Vp"
            v-model="moduleClassroomVpShort" required />
          <!--  <input type="text" class="border-b border-blue-500 outline-none  text-[#007FFF] "
            v-model="moduleClassroomVpShort" placeholder="Vp" required /> -->
        </div>
      </div>


    </UContainer>
    <template #footer>

      <UContainer class="flex justify-between">
        <span v-if="showSuccessAlert">
          Name:
          {{ moduleClassroomModuleNumber }} {{ moduleClassroomName }} Section: {{ moduleClassroomTrimester }}
          {{ moduleClassroomVpShort }}
        </span>
        <UButton :loading="isLoading" :disabled="isFormInvalid" @click="createModuleClassroom" color="red"
          variant="soft">
          Abschicken</UButton>
      </UContainer>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
const isFormValid = ref<boolean | undefined>();
const moduleClassroomModuleNumber = ref();
const moduleClassroomName = ref("");
const moduleClassroomVpShort = ref("");
const moduleClassroomTrimester = ref("");
const showSuccessAlert = ref(false);
const required = [(v: string) => !!v || "This field is required"];
const isLoading = ref<boolean>(false);

const isFormInvalid = computed(() => {
  return (
    !moduleClassroomModuleNumber.value ||
    !moduleClassroomName.value ||
    !moduleClassroomVpShort.value ||
    !moduleClassroomTrimester.value
  );
});


const createModuleClassroom = () => {

  if (moduleClassroomModuleNumber.value &&
    moduleClassroomName.value &&
    moduleClassroomVpShort.value &&
    moduleClassroomTrimester.value) {

    isFormValid.value = true;
    showSuccessAlert.value = true;
    isLoading.value = true;
  } else {

    console.error("Form is not valid. Please check the input fields.");
  }
  setTimeout(() => {
    moduleClassroomModuleNumber.value = '';
    moduleClassroomName.value = '';
    moduleClassroomVpShort.value = '';
    moduleClassroomTrimester.value = '';
    showSuccessAlert.value = false;
    isLoading.value = false;
  }, 5000);
};
</script>

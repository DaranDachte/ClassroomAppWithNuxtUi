<template>
    <UCard class="font-bold">
        <template #header>

            <h1 class=" text-[1.2rem] "> Special Classroom erstellen</h1>
            <p>Custom-Modul-Classroom werden von VW zu speziellen Themen ereichen erstellt. Beispielsweise eine
                Master-Thesis
                oder einem Projektstudium.</p>
        </template>
        <UContainer class="mb-5 flex flex-col">
            <label class="font-bold " for="moduleClassroomModuleNumber">Studien Gruppe</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] mb-5 "
                placeholder=" Studien  Gruppe" v-model="specialClassroomStudyGroup" required />

            <label class="font-bold" for="moduleClassroomModuleNumber">Name des Modules</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] "
                placeholder="Name des modules" v-model="specialClassroomModulename" required />
        </UContainer>
        <template #footer>
            <UContainer class="flex justify-between">
                <span v-if="showSuccessAlert">
                    Ihre Gruppe {{ specialClassroomStudyGroup }} fangt am {{ specialClassroomModulename }} an<br />
                </span>
                <UButton :loading="isLoading" :disabled="isFormInvalid" @click="createSpecialClassroom" color="red"
                    variant="soft">
                    Abschicken</UButton>
            </UContainer>
        </template>
    </UCard>
</template>
<script lang="ts" setup>
const isFormValid = ref<boolean | undefined>();
const specialClassroomStudyGroup = ref<string | undefined>();
const specialClassroomModulename = ref<string | undefined>();
const showSuccessAlert = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const isFormInvalid = computed(() => {
    return (
        !specialClassroomStudyGroup.value ||
        !specialClassroomModulename.value
    );
});
const createSpecialClassroom = () => {
    if (specialClassroomStudyGroup.value && specialClassroomModulename.value) {
        isFormValid.value = true;
        showSuccessAlert.value = true;
        isLoading.value = true;
    }
    setTimeout(() => {
        specialClassroomStudyGroup.value = "";
        specialClassroomModulename.value = "";
        showSuccessAlert.value = false;
        isLoading.value = false;
    }, 5000);
}
</script>
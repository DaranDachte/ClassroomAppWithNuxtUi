<template>
    <UCard class="font-bold">
        <template #header>

            <h1 class=" text-[1.2rem] "> Event Classroom erstellen</h1>
            <p>Event Classrooms werden zu Ereignissen erstellt, in deren Zusammenhang eine Gruppe aus Studierenden
                betroffen
                ist. Beispielsweise der Event "carrerday".</p>
        </template>


        <UContainer class="mb-5 flex flex-col">


            <label class="font-bold " for="moduleClassroomModuleNumber">Studien Gruppe</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] mb-5 "
                placeholder=" Studien  Gruppe" v-model="eventClassroomStudyGroup" required />

            <label class="font-bold" for="moduleClassroomModuleNumber">Name des Modules</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] "
                placeholder="Name des modules" v-model="eventClassroomModulename" required />

        </UContainer>
        <template #footer>


            <UContainer class="flex justify-between">
                <span v-if="showSuccessAlert">
                    Classroom
                    <b>{{ eventClassroomStudyGroup }} {{ eventClassroomModulename }}</b>
                    wurde erstellt
                </span>
                <UButton :loading="isLoading" :disabled="isFormInvalid" @click="createEventClassroom" color="red"
                    variant="soft">
                    Abschicken</UButton>
            </UContainer>
        </template>
    </UCard>

</template>

<script setup lang="ts">
const eventClassroomStudyGroup = ref("");
const eventClassroomModulename = ref("");
const showSuccessAlert = ref(false);
const isFormValid = ref<boolean | undefined>();
const isFormInvalid = computed(() => {
    return (
        !eventClassroomStudyGroup.value ||
        !eventClassroomModulename.value
    );
});

const isLoading = ref<boolean>(false);

const createEventClassroom = () => {
    if (eventClassroomModulename.value && eventClassroomStudyGroup.value) {
        isFormValid.value = true;
        showSuccessAlert.value = true;
        isLoading.value = true;
    }
    setTimeout(() => {
        eventClassroomModulename.value = "";
        eventClassroomStudyGroup.value = "";
        showSuccessAlert.value = false;
        isLoading.value = false;
    }, 5000);
}
</script>
<template>
    <UCard class="font-bold">
        <template #header>

            <h1 class=" text-[1.2rem] "> Info-Classroom erstellen</h1>
            <p>INFO-Classrooms werden von der Studienorganisation zu Beginn eines neuen Studienjahres angelegt. In
                diesen
                classrooms Dort allgemeine Informationen zu der betreffenden Studiengruppe von xxxx geposted.</p>
        </template>


        <UContainer class="mb-5 flex flex-col">


            <label class="font-bold " for="moduleClassroomModuleNumber">Studien Gruppe</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] mb-5 "
                placeholder=" Studien  Gruppe" v-model="infoClassroomStudyGroup" required />

            <label class="font-bold" for="moduleClassroomModuleNumber">Name des Modules</label>
            <UInput variant="none" class="border-b border-blue-500 outline-none  text-[#007FFF] "
                placeholder="Name des modules" v-model="infoClassroomBegin" required />

        </UContainer>
        <template #footer>


            <UContainer class="flex justify-between">
                <span v-if="showSuccessAlert">
                    Classroom
                    <b> {{ infoClassroomStudyGroup }} {{ infoClassroomBegin }} </b>
                    wurde erstellt
                </span>
                <UButton :loading="isLoading" :disabled="isFormInvalid" @click="createInfoClassroom" color="red"
                    variant="soft">
                    Abschicken</UButton>
            </UContainer>
        </template>
    </UCard>
</template>


<script lang="ts" setup>
const isFormValid = ref<boolean | undefined>();
const infoClassroomStudyGroup = ref("");
const infoClassroomBegin = ref("");
const showSuccessAlert = ref(false);
const isLoading = ref<boolean>(false);





const isFormInvalid = computed(() => {
    return (
        !infoClassroomStudyGroup.value ||
        !infoClassroomBegin.value
    );
});


const createInfoClassroom = () => {
    if (infoClassroomStudyGroup.value && infoClassroomBegin.value) {
        isFormValid.value = true;
        showSuccessAlert.value = true;
        isLoading.value = true;
    }
    setTimeout(() => {
        infoClassroomBegin.value = "";
        infoClassroomStudyGroup.value = "";
        showSuccessAlert.value = false;
        isLoading.value = false;
    }, 5000);
}

</script>
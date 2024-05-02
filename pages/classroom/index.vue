<template>
    <div class="flex mt-10 font-bold ">
        <div class="flex ml-5 outline-none border-none   w-1/2">
            <USelect class="flex outline-none border-none w-full" icon="i-heroicons-magnifying-glass-20-solid"
                :options="countries" placeholder="Select..." variant="outline" color="white" />
        </div>
        <div class="flex justify-between  w-1/2 ">
            <UInput class="ml-5 w-1/2" variant="outline" placeholder="Search a Teacher..." />
            <UInput class="mx-5 w-1/2" variant="outline" placeholder="Search a Student..." />
        </div>
    </div>

    <UTable :rows="columnsData" :columns="columns" class="font-bold">

        <template #actions-data="{ row }">
            <div class="flex justify-between hover:cursor-pointer ">
                <UIcon @click="goToContact(row)" name="i-heroicons-pencil" />
                <UIcon @click="openDeleteClassPopover(row)" name="i-heroicons-trash-20-solid" />
            </div>
        </template>
    </UTable>


    <div class="flex mt-10 ">
        <div class="flex ml-5 outline-none border-none w-1/2  font-bold">
            <span class=" text-[0.8rem] inline-block ">Items per Page:</span>
            <USelect class="flex outline-none border-none w-full mr-10" icon="i-heroicons-magnifying-glass-20-solid"
                :options="countries" placeholder="Select..." variant="outline" color="white" />
        </div>
        <div class="flex justify-around  w-1/2 ">
            <UButton class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ">PreviousPage</UButton>
            <UButton class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ">Next Page</UButton>
        </div>
    </div>
    <UModal v-model="openClassDelete" :overlay="false">
        <div class="p-4">

            <div class=" w-[25rem] h-[8rem] flex flex-col ">
                <h2 class="text-[1.5rem] text-center mb-2 text-[#FF6865] font-bold">
                    Do you really want to delete
                    <p> {{ selectedClass?.raw.name }}?</p>
                </h2>
                <div class="flex justify-between">
                    <UButton @click="deleteClassItemConfirm(selectedClass)">Delete</UButton>
                    <UButton @click="closeCancelLehrerDelete">Cancel</UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>
<script setup lang="ts">
import { useTeachersStudentsStore } from '~/store/teachersStudents'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

let selectedClass: ClassroomModule | null = null;
const openClassDelete = ref<boolean>(false);
const editedIndex = ref<number>(-1);
const bufferedClassItem = ref<Teacher>({ id: "0", name: '', isOwner: false });
const defaultClassItem = ref<Teacher>({ id: "0", name: '', isOwner: false })




//#region ClassDelete dialog methods
const openDeleteClassPopover = (row: ClassroomModule) => {
    openClassDelete.value = true
    selectedClass = row;
}
const closeClassDeleteDialog = () => {
    openClassDelete.value = false;
    bufferedClassItem.value = { ...defaultClassItem.value };
    editedIndex.value = -1;
};

const closeCancelLehrerDelete = () => {
    openClassDelete.value = false;
};
const deleteClassItemConfirm = (classroom: ClassroomModule | null) => {
    if (!classroom) return;
    const index = teachersStudentsStore.classrooms.findIndex(c => c.id === classroom.id);
    if (index !== -1) {
        teachersStudentsStore.classrooms.splice(index, 1);
    }
    closeClassDeleteDialog();
};
//#endregion

const router = useRouter();
const teachersStudentsStore = useTeachersStudentsStore();
const data = computed(() => {

    return teachersStudentsStore.classrooms
});


const columnsData = computed(() => data.value.map(item => ({
    id: item.id,
    type: item.type,
    raw: {
        name: item.raw.name,
        section: item.raw.section,
        ownerId: item.raw.ownerId
    }
})))


const goToContact = (classroom: ClassroomModule) => {
    console.log(classroom.id);

    router.push(`/classroom/${classroom.id}`);
}

const columns = [{
    key: 'id',
    label: 'Id'
}, {
    key: 'type',
    label: 'Type'
}, {
    key: 'raw.name',
    label: 'Name',

}, {
    key: 'raw.section',
    label: 'Section'
}, {
    key: 'raw.ownerId',
    label: 'Owner'
}, {
    key: 'actions',
    label: 'Actions'
},]


const countries = [{
    name: 'United States',
    value: 'US'
}, {
    name: 'Canada',
    value: 'CA',

}, {
    name: 'Mexico',
    value: 'MX'
}]
const country = ref('CA')



</script>

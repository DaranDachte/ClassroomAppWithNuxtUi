<template>
    <div
        class="block rounded-lg font-bold  w-[25rem] m-10 leading-8 bg-sky-500 shadow-lg shadow-blue-500/50 p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight"> Name: {{ data?.raw.name }}</h5>
        <p> Trimestr: {{ data?.trimester }} </p>
        <p> Module Id: {{ data?.id }}</p>
        <p> Module Instance: {{ data?.moduleInstance }}</p>
        <p> Module Title: {{ data?.moduleTitle }}</p>
        <button @click="navigateTo" type="button"
            class="inline-block bg-[#ca7d55]  w-full rounded mt-5  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Zurück
        </button>
    </div>
    <div class="flex justify-between w-[80rem] mt-5 items-center">
        <UInputMenu class="w-[50rem]  ml-5" v-model="selected" :options="people" placeholder="Google account" />
        <UButton icon="i-heroicons-plus" color="indigo">Add Teacher</UButton>
    </div>

    <UTable :rows="data?.teachers" :columns="columns" class="font-bold mt-10 w-[80rem] ">

        <template #name-data.name="{ row }">

            <div :class="row.class">

                {{ row.teacher }}
                <UIcon v-if="row.teachers.isOwner" name="i-heroicons-shield-exclamation" />
            </div>
        </template>
        <template #actions-data="{ row }">
            <div class="flex justify-between hover:cursor-pointer ">
                <UIcon @click="goToProfileTeacherPage(row)" name="i-heroicons-folder-open" />
                <UIcon v-if="!row.isOwner" @click="openDeleteLehrerPopover(row)" name="i-heroicons-trash-20-solid" />
            </div>
        </template>
    </UTable>
    <div class="flex justify-between  w-[80rem] mt-10 ">
        <div class=" flex flex-col w-1/2 items-center">
            <h3 class="font-bold ml-5 ">Students</h3>
            <UButton @click="openDeleteStudentPopover" class=" ml-5 w-[10rem] " icon="i-heroicons-user-minus"
                color="indigo"> Delete Students
            </UButton>


            <UTable class="font-bold mt-10 ml-5 w-full" v-model="selected" :rows="data?.students"
                :columns="studentColumns" @select="select">

                <template #details-data="{ row }">
                    <UIcon class="cursor-pointer" @click="goToProfileStudentPage(row)" name="i-heroicons-folder-open" />
                </template>
            </UTable>
        </div>
        <div class=" flex flex-col w-1/2 items-center ">
            <h3 class="font-bold ml-5 "> VVStudents</h3>
            <UButton class=" flex flex items-center justify-center ml-5 w-[10rem]" icon="i-heroicons-arrow-path"
                color="indigo"> Refresh
            </UButton>
            <UTable :rows="data?.students" :columns="vvColumns" class="font-bold mt-10 ml-[3rem] w-full ">
            </UTable>
        </div>
    </div>

    <div class=" w-[80rem] ml-5 mt-5">
        <h3 class="font-bold ml-5 mb-5">Upload Students</h3>
        <UTextarea color="gray" variant="outline" placeholder="Search by Email..." />
        <UTable :rows="uploadEmails" :columns="uploadColumns" class="font-bold mt-10 ml-[3rem] w-full ">
        </UTable>
        <UButton class=" flex flex items-center justify-center ml-5 w-[10rem] mb-5" icon="i-heroicons-arrow-up-tray"
            color="indigo">
            Upload
        </UButton>
    </div>
    <UModal v-model="openTeacherDelete" :overlay="false">
        <div class="p-4">

            <div class=" w-[25rem] h-[8rem] flex flex-col ">
                <h2 class="text-[1.5rem] text-center mb-2 text-[#FF6865] font-bold">
                    Do you really want to delete
                    <p> {{ selectedTeacher?.name }}?</p>
                </h2>
                <div class="flex justify-between">
                    <UButton @click="deleteLehrerItemConfirm(selectedTeacher)">Delete</UButton>
                    <UButton @click="closeCancelLehrerDelete">Cancel</UButton>
                </div>
            </div>
        </div>
    </UModal>
    <UModal v-model="openStudentDelete" :overlay="false">
        <div class="p-4">
            <div class=" w-[25rem] h-[8rem] flex flex-col ">
                <h2 class="text-[1.5rem] text-center mb-2 text-[#FF6865] font-bold">
                    <p>Do you really want to delete {{ selected.length }} student(s)?</p>
                </h2>
                <div class="flex justify-between">
                    <UButton @click="deleteSelectedStudents">Delete</UButton>
                    <UButton @click="closeCancelStudentDelete">Cancel</UButton>
                </div>
            </div>
        </div>
    </UModal>
</template>

<script setup lang="ts">
import { useTeachersStudentsStore } from '~/store/teachersStudents'
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter();
const id = route.params.id;
if (typeof id !== 'string') throw new Error('Invalid id');

const teachersStudentsStore = useTeachersStudentsStore();
const data = computed(() => teachersStudentsStore.classrooms.find(classroom => classroom.id === id))

const navigateTo = () => {
    router.push('/classroom');
}

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

interface Teacher {
    id: number;
    name: string;
    isOwner: boolean;
    class: string;
}
interface Student {
    id: number;
    name: string;
    email: string;
    displayName: string;
    details: string;
}

interface VVStudent {
    id: number;
    name: string;
    isOwner: boolean;
}
interface Lehrer {
    id: number;
    name: string;
    isOwner: boolean;
    class: string;
}

let selectedTeacher: Lehrer | null = null;

let selectedStudent: Student | null = null;

const selected = ref<Student[]>([]);
const openTeacherDelete = ref<boolean>(false);
const openStudentDelete = ref<boolean>(false);
const editedIndex = ref<number>(-1);
const bufferedLehrerItem = ref<Teacher>({ id: 0, name: '', isOwner: false, class: '' });
const defaultLehrerItem = ref<Teacher>({ id: 0, name: '', isOwner: false, class: '' })
const bufferedStudentItem = ref<Student>({ id: 0, name: '', email: '', displayName: '', details: '' });
const defaultStudentItem = ref<Student>({ id: 0, name: '', email: '', displayName: '', details: '' });

const columns = [{
    key: 'id',
    label: 'Id'
}, {
    key: 'name',
    label: 'Name',

}, {
    key: 'actions',
    label: 'Details/Delete'
},]

const studentColumns = [
    {
        key: 'id',
        label: 'Id'
    },
    {
        key: 'name',
        label: 'Name',
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'displayName',
        label: 'Display Name',
    },
    {
        key: 'details',
        label: 'Details',
    },

];

const uploadEmails = ref([{ id: 1, email: " " }])
const vvColumns = [
    {
        key: 'firstName',
        label: 'FirstNamme'
    },
    {
        key: 'lastName',
        label: 'LastName',
    }, {
        key: 'matric',
        label: 'Matric',
    },

];
const uploadColumns = [
    {
        key: 'email',
        label: 'Email'
    },

]

const goToProfileStudentPage = (student: { id: string }) => {

    const studentId = student.id;
    const classroom = route.params.id;
    router.push(`/classroom/${classroom}/student/${studentId}`);
};
const goToProfileTeacherPage = (teacher: { id: string }) => {
    const teacherId = teacher.id;
    const classroom = route.params.id;
    console.log(route.params)
    router.push(`/classroom/${classroom}/teacher/${teacherId}`);
};
//#region LehrerDelete dialog methods
const openDeleteLehrerPopover = (row: Lehrer) => {
    openTeacherDelete.value = true
    selectedTeacher = row;
}
const closeLehrerDeleteDialog = () => {
    openTeacherDelete.value = false;
    bufferedLehrerItem.value = { ...defaultLehrerItem.value };
    editedIndex.value = -1;
};

const closeCancelLehrerDelete = () => {
    openTeacherDelete.value = false;
};
const deleteLehrerItemConfirm = (lehrer: Lehrer | null) => {
    if (lehrer === null) return;
    const classroom: Classroom | undefined = teachersStudentsStore.classrooms.find(c => c.teachers.some(t => t.id === String(lehrer.id))) as unknown as Classroom;
    if (!classroom) return;
    const index = classroom.teachers.findIndex(t => t.id === String(lehrer.id));
    if (index !== -1) {
        classroom.teachers.splice(index, 1);
    }

    closeLehrerDeleteDialog();
}
//#endregion

//#region StudentDelete dialog methods
function select(row: Student) {
    const index = selected.value.findIndex((item) => item.id === row.id)
    if (index === -1) {
        selected.value.push(row)
    } else {
        selected.value.splice(index, 1)
    }
}
const deleteSelectedStudents = () => {
    // Проходимся по всем выбранным студентам
    selected.value.forEach((selectedStudent) => {
        // Находим класс, в котором находится студент
        const classroom = teachersStudentsStore.classrooms.find(c => c.students.some(s => s.id === String(selectedStudent.id)));
        if (!classroom) return;

        // Находим индекс студента в массиве студентов данного класса
        const index = classroom.students.findIndex(s => s.id === String(selectedStudent.id));
        if (index !== -1) {
            // Удаляем студента из массива студентов
            classroom.students.splice(index, 1);
        }
    });

    // Очищаем выбранные студенты
    selected.value = [];

    // Закрываем диалоговое окно удаления
    closeStudentDeleteDialog();
};
const openDeleteStudentPopover = (row: Student) => {
    openStudentDelete.value = true
    selectedStudent = row;
}

const closeCancelStudentDelete = () => {
    openStudentDelete.value = false;
};

const closeStudentDeleteDialog = () => {
    openStudentDelete.value = false;
    bufferedStudentItem.value = { ...defaultStudentItem.value };
    editedIndex.value = -1;
};
//#endregion
</script>
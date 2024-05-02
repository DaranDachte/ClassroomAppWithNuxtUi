<template>
    <div class="w-[80rem] ml-5">
        <USelectMenu class="mb-[6rem] " v-model="selected" :options="types" multiple placeholder="Select people" />
        <UPopover v-model:open="open">
            <UButton color="white" class=" bg-sky-300/100 hover:bg-sky-500 shadow-xl"
                trailing-icon="i-heroicons-user-plus" label="Create a new Contact" />

            <template #panel>
                <div class="  w-[20rem] p-5  text-center leading-10 bg-slate-100 ">
                    <h2 class="text-[1.5rem] mb-5  font-bold">Create a new Contact</h2>
                    <UInput v-model="firstName" class="mb-5" label="First Name" placeholder="First Name..." />
                    <UInput v-model="familyName" class="mb-5" label="Last Name" placeholder="Family Name..." />
                    <UInput v-model="email" class="mb-5" label="Email" placeholder="Email..." />
                    <UTextarea v-model="textArea" color="white" variant="outline" placeholder="Note!..." />
                    <div class="mt-5 flex justify-between">
                        <UButton @click="sendAllDates" :disabled="datesAreNotComplete" color="blue" variant="outline">
                            Send</UButton>
                        <UButton @click="closeContactCreateMenu" color="red" variant="outline">Cancel</UButton>

                    </div>
                    <p v-if="message" class="text-green-500 font-bold mt-3">{{ message }}</p>

                </div>
            </template>
        </UPopover>

        <UTable :rows="filteredColumnsData" :columns="columns" class="font-bold">

            <template #actions-data="{ row }">
                <div class="flex justify-between hover:cursor-pointer ">
                    <UIcon @click="goToContact(row)" name="i-heroicons-user" />

                </div>
            </template>
        </UTable>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useContactListStore } from '../../store/contacstList'
const selected = ref([]);
const columns = [{
    key: 'email',
    label: 'Email Adresses'
}, {
    key: 'name',
    label: 'Names'
}, {
    key: 'actions',
    label: 'Go to contact'
},]
const open = ref(false)
const firstName = ref('');
const familyName = ref('');
const email = ref('');
const textArea = ref('');
const message = ref("");
const types = ['DIRECTORY_SOURSE_TYPE_DOMAIN_PROFILE', 'DIRECTORY_SOURSE_TYPE_DOMAIN_CONTACT']
const contactsListStore = useContactListStore()
const router = useRouter();
import { computed } from 'vue';

const data = computed(() => {
    return contactsListStore.contactsList
});

interface ITest { email: string, name: string, type: string }

const goToContact = (row: ITest) => {

    console.log(row);
    const emailId = row.email;
    router.push(`/contactsList/${emailId}`);
};
const columnsData = computed(() => data.value.map(item => ({
    email: item.emailAddresses[0].value,
    name: item.names[0].displayName,
    type: item.emailAddresses[0].metadata.source.type,
})));
const filteredColumnsData = computed(() => {
    if (selected.value.length === 0) return columnsData.value;
    const isDomainProfile = (selected.value as string[]).includes('DIRECTORY_SOURSE_TYPE_DOMAIN_PROFILE')
    const isDomainContact = (selected.value as string[]).includes('DIRECTORY_SOURSE_TYPE_DOMAIN_CONTACT')

    if (isDomainProfile) {

        return columnsData.value.filter(item => item.type === 'DOMAIN_PROFILE');
    } else if (isDomainContact) {

        return columnsData.value.filter(item => item.type === 'DOMAIN_CONTACT');
    } else {
        return [];
    }
});



const closeContactCreateMenu = () => {
    open.value = false;
}

const datesAreNotComplete = computed(() => {
    return !firstName.value || !familyName.value || !email.value || !textArea.value;
})
const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



const sendAllDates = () => {
    if (firstName.value && familyName.value && textArea.value) {
        const isValidEmail = validateEmail(email.value);
        if (isValidEmail) {
            message.value = "Dankeschön! Die Daten wurden an den Administrator gesendet und werden nach Überprüfung in die allgemeine Liste aufgenommen";
            setTimeout(() => {
                firstName.value = '';
                familyName.value = '';
                email.value = '';
                textArea.value = '';
                message.value = '';
                open.value = false;
            }, 7000);
        } else {
            message.value = "Bitte geben Sie eine gültige E-Mail Adresse ein";
            setTimeout(() => {
                message.value = "";
            }, 5000);
        }
    }
}
</script>
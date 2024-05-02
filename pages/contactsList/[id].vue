<template>
    <div
        class="block rounded-lg font-bold  w-[25rem] m-10 leading-8 bg-sky-500 shadow-lg shadow-blue-500/50 p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight"> Name: {{ data?.names[0].displayName }}</h5>
        <p> Email: {{ data?.emailAddresses[0].value }} </p>
        <p>Id: {{ data?.names[0].metadata.source.id }}</p>
        <p> Type: {{ data?.names[0].metadata.source.type }}</p>
        <p> FormattedType: {{ data?.emailAddresses[0].formattedType }}</p>
        <button @click="navigateTo" type="button"
            class="inline-block bg-[#ca7d55]  w-full rounded mt-5  px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            Zurück
        </button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useContactListStore } from '../../store/contacstList'
import { useRouter, useRoute } from 'vue-router';

const contactsListStore = useContactListStore()
const route = useRoute()
const router = useRouter();
const emailId = route.params.id;

const data = computed(() => contactsListStore.contactsList.find((contact) => contact.emailAddresses[0].value === emailId))

const navigateTo = () => {
    router.push(`/contactsList`);
}

</script>

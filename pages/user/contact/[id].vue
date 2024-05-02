<template>
    <UCard>
        <template #header>
            <UAvatar size="3xl" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" />
            <h2>Full Name</h2>
            <h3>Organisation</h3>
            <UDivider label="persönliche Daten" />
            <div class="bg-gray-100 rounded">
                <h3>Position</h3>
                <h3>Email</h3>
                <h3>Pseudonym/Benutzername</h3>
                <h3>Geburtstag </h3>
                <h3>Telefonnummer</h3>
                <h3>Adresse</h3>
                <h3>PLZ</h3>
                <h3>Stadt</h3>
                <h3>Land</h3>
            </div>
        </template>
        <template #footer>
            <div class=" flex justify-between items-center">
                <div>
                    <p class="font-bold">Include in global Adress List</p>
                    <UToggle color="violet" :model-value="false" />
                    <UButton class="ml-2" size="xs" color="violet" variant="solid" label="Save" />
                    <UButton class="ml-5" size="xs" color="red" variant="solid" label="Cancel" />
                </div>

                <p class="text-right font-bold"> Copyright © {{ new Date().getFullYear() }}</p>
            </div>
        </template>
    </UCard>
</template>
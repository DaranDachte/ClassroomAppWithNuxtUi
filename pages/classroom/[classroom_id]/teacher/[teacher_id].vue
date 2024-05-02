<template>
    <UCard>
        <template #header>
            <div>
                <h1 class="font-bold m-5 text-[1.5rem]">Eine personalisierte Lehrerseite mit einem I.D. : {{
                    $route.params.teacher_id
                }}
                </h1>
            </div>
            <div class="flex  items-center h-[20rem]">
                <ULandingCard class="  m-5 w-[40rem] font-bold w-1/2 " :title="data?.fullName || ''"
                    :description="description" icon="i-heroicons-rocket-launch" color="red" orientation="horizontal">
                    <template #description>
                        <p class="text-[#E44D2E]">{{ description }}</p>
                    </template>
                    <img src="https://picsum.photos/640/360?grayscale" class="w-64 rounded-md" />
                </ULandingCard>
                <UContainer class="w-1/2">
                    <img src="/Accadis.png" class=" rounded-md p-20" />
                </UContainer>
            </div>
        </template>


        <ULandingGrid>
            <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-face-smile" title="Vorname Nachname usw. ">
                <template #description>
                    <div class="text-[1rem] font-bold">
                        <p class=""> Vorname: {{ data?.givenName }}</p>
                        <p> Name: {{ data?.familyName }}</p>
                        <p>Voll Name: {{ data?.fullName }}</p>
                        <p>Nationalität: {{ data?.Nationalität }}</p>
                        <p> Geschlecht: {{ data?.Geschlecht }}</p>
                        <p>Gender: {{ data?.Gender }}</p>
                    </div>

                </template>
            </ULandingCard>

            <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-home" title="Adresse">

                <template #description>
                    <div class="text-[1rem] font-bold">
                        <p> Land: {{ data?.Country }}</p>
                        <p> Stadt: {{ data?.City }}</p>
                        <p>Straße: {{ data?.Street }}</p>
                        <p>Postleitzahl: {{ data?.Zip }}</p>

                    </div>
                </template>
            </ULandingCard>
            <ULandingCard class="col-span-6 row-span-4" icon="i-heroicons-cake" title="Alter, Geburtstag, etc. ">
                <template #description>
                    <div class="text-[1rem] font-bold">
                        <p class=""> Geburtstag: {{ data?.birthday }}</p>
                        <p>Alter: {{ data?.Age }}</p>
                    </div>
                </template>
            </ULandingCard>
            <ULandingCard class="col-span-6 row-span-2" icon="i-heroicons-computer-desktop"
                title="Zusätzliche Informationen">
                <template #description>
                    <div class="text-[1rem] font-bold">
                        <p class=""> Telefonnummer: {{ data?.Phone }}</p>
                        <p> Email: {{ data?.Email }}</p>
                        <p>Sprachen:
                        <ul>
                            <li v-for="language in data?.Languages" :key="language">{{ language }}</li>
                        </ul>
                        </p>
                        <p>Hobby: {{ data?.Hobby }}</p>
                    </div>
                </template>
            </ULandingCard>
        </ULandingGrid>


        <template #footer>
            <UFooter>
                <template #left>
                    Copyright © {{ new Date().getFullYear() }}
                </template>
                <template #right>
                    <UButton icon="i-heroicons-academic-cap" color="gray" variant="ghost" to="https://www.accadis.com/"
                        target="_blank" />
                    <UButton icon="i-heroicons-globe-alt" color="gray" variant="ghost" to="https://www.transresult.de/"
                        target="_blank" />
                </template>
            </UFooter>
        </template>
    </UCard>
</template>

<script setup lang="ts">
import { useTeachersStudentsStore } from '../../../../store/teachersStudents'
import { useRoute } from 'vue-router'


const teachersStudentsStore = useTeachersStudentsStore()

const route = useRoute()
const id = route.params.classroom_id
const teacherId = route.params.teacher_id

console.log(id, teacherId)

const data = computed(() =>
    teachersStudentsStore.classrooms.find((classroom) => classroom.id === id)?.teachers.find((teacher) => teacher.id === teacherId)
);



const description = "Achtung! Diese Seite enthält persönliche Daten von Lehrer, die an der accadis-Schule arbeiten. Bitte beachten Sie, dass alle Daten durch das Datenschutzgesetz geschützt sind und nicht an Dritte weitergegeben werden."
</script>
<template>
    <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6 mb-5">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <nuxt-link to="/" class="font-semibold text-xl tracking-tight">Classroom App</nuxt-link>
        </div>
        <div class="block lg:hidden">
            <button
                class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
                <nuxt-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Home Page
                </nuxt-link>
                <nuxt-link to="/classroom"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Classrom List
                </nuxt-link>
                <nuxt-link to="/stats" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Statistic Page
                </nuxt-link>
                <nuxt-link to="/contactsList"
                    class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                    Contacts List
                </nuxt-link>
            </div>
            <div>
                <a href="#"
                    class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Einloggen</a>
            </div>
        </div>
    </nav>
</template>
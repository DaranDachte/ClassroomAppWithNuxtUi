<template>
  <v-container v-if="error !== null">
    <v-row>
      <v-col>
        <v-alert :title="`${error.statusCode}`" :text="`${error.statusText}`" type="error"></v-alert>
      </v-col>
    </v-row>
  </v-container>
  <v-container v-else>
    <v-row>
      <v-col cols="6">
        <v-select
          v-model="courseStates"
          clearable
          chips
          label="Select"
          :items="['DIRECTORY_SOURCE_TYPE_DOMAIN_CONTACT', 'DIRECTORY_SOURCE_TYPE_DOMAIN_PROFILE']"
          multiple
          variant="outlined"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-data-table :headers="headers" :items="contacts" :loading="isLoading" items-per-page="500">
          <template #item.emailAddresses="{ item }">
            <v-chip-group>
              <v-chip v-for="address in item.emailAddresses">{{ address.value }}</v-chip>
            </v-chip-group>
          </template>
          <template #item.names="{ item }">
            <v-chip-group>
              <v-chip v-for="name in item.names">{{ name.displayName }}</v-chip>
            </v-chip-group>
          </template>
          <template #item.raw="{ item }">
            <j-s-o-n-button v-if="item" :model-value="item" icon="mdi-code-json" title="Google Classroom Object" />
          </template>
          <template #item.actions="{ item }">
            <v-icon class="mr-2" @click="goToContact(item.emailAddresses ? item.emailAddresses[0].value : null)"
              >mdi-account-details</v-icon
            >

            <v-icon
              v-if="item.raw.emailAddresses[0].metadata.source.type === 'DOMAIN_CONTACT'"
              class="mr-2"
              @click="openDeleteDomainSharedContact(item.emailAddresses ? item.emailAddresses[0].value : null)"
              >mdi-delete</v-icon
            >
          </template>
          <template #bottom>
            <v-row>
              <v-col cols="4" />
              <v-col cols="4">
                <v-select
                  v-model="itemsPerPage"
                  label="Items per page"
                  :items="itemsPerPageOptions"
                  item-value="value"
                  item-title="title"
                  variant="outlined"
                  density="compact">
                  <template #prepend> Items per page: </template>
                </v-select>
              </v-col>
              <v-col cols="2">
                <v-btn :disabled="isNextPageNotAvailable" @click="nextPage">Next page</v-btn>
              </v-col>
            </v-row>
          </template>
          <template v-slot:top>
            <v-dialog v-model="deleteDialog" max-width="500px" persistent>
              <v-card>
                <v-card-title class="text-h5">Delete</v-card-title>
                <v-card-text>
                  Are you sure you want to delete <strong>{{ sharedContact }}</strong> ?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="isLoading"
                    color="blue-darken-1"
                    variant="text"
                    @click="cancelDeleteDomainSharedContact"
                    >Cancel</v-btn
                  >
                  <v-btn
                    :loading="isLoading"
                    color="blue-darken-1"
                    variant="text"
                    @click="confirmDeleteDomainSharedContact"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-row
              ><v-col>
                <v-btn color="primary" prepend-icon="mdi-plus" @click="openCreateDomainSharedContact"
                  >Create shared contact</v-btn
                >
              </v-col></v-row
            >
            <v-dialog v-model="createDialog" max-width="500px" persistent>
              <v-card>
                <v-card-title class="text-h5">Create</v-card-title>
                <v-card-text>
                  <v-text-field
                    variant="outlined"
                    label="First name"
                    v-model="editedSharedContact.first_name"></v-text-field>
                  <v-text-field
                    variant="outlined"
                    label="Last name"
                    v-model="editedSharedContact.last_name"></v-text-field>
                  <v-text-field variant="outlined" label="Email" v-model="editedSharedContact.email"></v-text-field>
                  <v-textarea variant="outlined" label="Note" v-model="editedSharedContact.notes"></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :loading="isLoading"
                    color="blue-darken-1"
                    variant="text"
                    @click="cancelCreateDomainSharedContact"
                    >Cancel</v-btn
                  >
                  <v-btn
                    :loading="isLoading"
                    color="blue-darken-1"
                    variant="text"
                    @click="confirmCreateDomainSharedContact"
                    >OK</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts" setup>
import { useContactsStore } from "~/store/contacts";

const router = useRouter();
const contactsStore = useContactsStore();

const isLoading = computed(() => contactsStore.pending || isWorking.value);
const error = computed(() => contactsStore.error);
const items = computed(() => contactsStore.items ?? []);
const contacts = computed(() =>
  items.value.map((item) => ({ emailAddresses: item.emailAddresses, names: item.names, raw: item }))
);

const headers = computed(
  () =>
    [
      { title: "Email Addresses", align: "start", key: "emailAddresses" },
      { title: "Names", align: "start", key: "names" },
      { title: "Raw", align: "start", key: "raw" },
      { title: "Actions", align: "start", key: "actions" },
    ] as any[]
);

const goToContact = (id: string | undefined | null) => {
  if (typeof id !== "string") return;

  router.push(`/user/contact/${id}`);
};

const itemsPerPageOptions = computed(() => [
  { value: 10, title: "10" },
  { value: 20, title: "20" },
  { value: 50, title: "50" },
  { value: 100, title: "100" },
  { value: 250, title: "250" },
]);

const isNextPageNotAvailable = computed(() => !contactsStore.nextPageToken);
const itemsPerPage = computed<number>({
  get() {
    return contactsStore.itemsPerPage;
  },
  set(value: number) {
    contactsStore.itemsPerPage = value;
  },
});

const nextPage = contactsStore.nextPage;

const courseStates = computed<Array<string> | undefined>({
  get() {
    return contactsStore.directorySources;
  },
  set(value: Array<string> | undefined) {
    contactsStore.directorySources = value;
  },
});

const isWorking = ref<boolean>(false);
const deleteDialog = ref<boolean>(false);
const sharedContact = ref<string | null>();

const openDeleteDomainSharedContact = async (email: string) => {
  sharedContact.value = email;
  deleteDialog.value = true;
};

const confirmDeleteDomainSharedContact = async () => {
  isWorking.value = true;
  await $fetch(`/api/v1/contacts/${sharedContact.value}`, { method: "DELETE" });
  await contactsStore.refresh();
  sharedContact.value = null;
  deleteDialog.value = false;
  isWorking.value = false;
};
const cancelDeleteDomainSharedContact = async () => {
  sharedContact.value = null;
  deleteDialog.value = false;
};

const createDialog = ref<boolean>(false);
const editedSharedContact = ref({ first_name: "", last_name: "", email: "", notes: "" });
const openCreateDomainSharedContact = async (email: string) => {
  editedSharedContact.value = { first_name: "", last_name: "", email: "", notes: "" };
  createDialog.value = true;
};

const confirmCreateDomainSharedContact = async () => {
  isWorking.value = true;
  await $fetch(`/api/v1/contacts`, { method: "POST", body: editedSharedContact.value });

  await contactsStore.refresh();
  createDialog.value = false;

  isWorking.value = false;
};

const cancelCreateDomainSharedContact = async () => {
  createDialog.value = false;
};
</script>

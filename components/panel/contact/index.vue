<script setup lang="ts">
const {
  loading,
  contactData,
  socialsData,
  fetchContactData,
  fetchSocialMediaData,
} = useContact();

const refreshData = async () => {
  await fetchContactData();
  await fetchSocialMediaData();
};

const displayContact = computed(() => contactData.value ?? null);

const displayContactDataForm = ref<boolean>(false);
const displaySocialDataForm = ref<boolean>(false);

onMounted(async () => {
  await fetchContactData();
  await fetchSocialMediaData();
  console.log(contactData.value);
});
</script>

<template>
  <section
    class="w-full min-h-[42rem] flex flex-col items-center p-4 gap-4 overflow-y-auto"
  >
    <PanelContactDataModal
      v-if="displayContactDataForm"
      :data="contactData"
      @close="displayContactDataForm = false"
      @refresh="refreshData"
    />

    <PanelContactSocialModal
      v-if="displaySocialDataForm"
      :data="socialsData"
      @close="displaySocialDataForm = false"
      @refresh="refreshData"
    />

    <p class="text-2xl">Twoje dane kontaktowe</p>
    <div v-if="loading" class="w-full h-full flex items-center justify-center">
      <i class="pi pi-spin pi-spinner text-2xl text-[#444]"></i>
    </div>
    <div
      v-if="!loading"
      class="w-full max-h-[36rem] flex flex-col gap-8 overflow-y-auto pb-16 lg:pb-0"
    >
      <div class="w-full flex flex-col md:flex-row justify-center gap-8">
        <div
          v-if="displayContact"
          class="relative w-full lg:h-[32rem] md:w-1/2 md:max-w-[36rem] flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
        >
          <h3 class="text-xl text-[#444]">Dane osobiste</h3>
          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-user md:text-lg text-[#777]"></i>
              <p class="md:text-lg text-[#777]">Imię i nazwisko</p>
            </span>
            <p class="text-lg ml-2">
              {{ displayContact.name_surname }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-phone md:text-lg text-[#777]"></i>
              <p class="md:text-lg text-[#777]">Numer telefonu</p>
            </span>
            <p class="text-lg ml-2">
              {{ displayContact.phone_number }}
            </p>
          </div>
          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-envelope md:text-lg text-[#777]"></i>
              <p class="md:text-lg text-[#777]">E-mail</p>
            </span>
            <p class="text-lg ml-2">
              {{ displayContact.email }}
            </p>
          </div>
          <button
            @click="displayContactDataForm = true"
            class="md:absolute md:bottom-4 md:right-4 w-[10rem] h-[2.5rem] text-[#444] mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
          >
            Edytuj sekcję
          </button>
        </div>
        <div
          class="relative w-full md:w-1/2 md:max-w-[36rem] flex flex-col gap-2 p-4 bg-[#D9D9D9] rounded-lg"
        >
          <h3 class="text-xl text-[#444]">Konta społecznościowe</h3>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-facebook text-lg text-[#777]"></i>
              <p class="text-lg text-[#777]">Facebook:</p>
            </span>
            <p class="text-lg ml-2">
              {{
                socialsData?.find(
                  (s) => s.platform === "facebook" && s.username
                )?.username || "-"
              }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-instagram text-lg text-[#777]"></i>
              <p class="text-lg text-[#777]">Instagram:</p>
            </span>
            <p class="text-lg ml-2">
              {{
                socialsData?.find(
                  (s) => s.platform === "instagram" && s.username
                )?.username || "-"
              }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-linkedin text-lg text-[#777]"></i>
              <p class="text-lg text-[#777]">LinkedIn:</p>
            </span>
            <p class="text-lg ml-2">
              {{
                socialsData?.find(
                  (s) => s.platform === "linkedin" && s.username
                )?.username || "-"
              }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-youtube text-lg text-[#777]"></i>
              <p class="text-lg text-[#777]">YouTube:</p>
            </span>
            <p class="text-lg ml-2">
              {{
                socialsData?.find((s) => s.platform === "youtube" && s.username)
                  ?.username || "-"
              }}
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <span class="flex items-center gap-2">
              <i class="pi pi-twitter text-lg text-[#777]"></i>
              <p class="text-lg text-[#777]">Twitter / X:</p>
            </span>
            <p class="text-lg ml-2">
              {{
                socialsData?.find((s) => s.platform === "twitter" && s.username)
                  ?.username || "-"
              }}
            </p>
          </div>
          <button
            @click="displaySocialDataForm = true"
            class="md:absolute md:bottom-4 md:right-4 w-[10rem] h-[2.5rem] text-[#444] mt-4 border-2 border-[#444] rounded-lg self-center active:bg-[#444] active:text-[#eee] hover:bg-[#444] hover:text-[#eee] hover:cursor-pointer"
          >
            Edytuj sekcję
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

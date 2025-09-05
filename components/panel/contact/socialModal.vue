<script setup lang="ts">
import { useField, useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const emit = defineEmits<{
  (e: "close"): void;
  (e: "refresh"): void;
}>();

const { data } = defineProps<{
  data: any;
}>();

const { loading, editSocialsData } = useContact();

const validationSchema = toTypedSchema(
  z.object({
    facebook: z.string().optional(),
    facebookURL: z.union([
      z.string().url("Podaj poprawny link"),
      z.string().length(0),
    ]),
    instagram: z.string().optional(),
    instagramURL: z.union([
      z.string().url("Podaj poprawny link"),
      z.string().length(0),
    ]),
    linkedin: z.string().optional(),
    linkedinURL: z.union([
      z.string().url("Podaj poprawny link"),
      z.string().length(0),
    ]),
    youtube: z.string().optional(),
    youtubeURL: z.union([
      z.string().url("Podaj poprawny link"),
      z.string().length(0),
    ]),
    twitter: z.string().optional(),
    twitterURL: z.union([
      z.string().url("Podaj poprawny link"),
      z.string().length(0),
    ]),
  })
);

const { handleSubmit, meta } = useForm({
  validationSchema,
  initialValues: {
    facebook: data[0].username ?? "",
    facebookURL: data[0]?.link ?? "",
    instagram: data[1]?.username ?? "",
    instagramURL: data[1]?.link ?? "",
    linkedin: data[2]?.username ?? "",
    linkedinURL: data[2]?.link ?? "",
    youtube: data[3]?.username ?? "",
    youtubeURL: data[3]?.link ?? "",
    twitter: data[4]?.username ?? "",
    twitterURL: data[4]?.link ?? "",
  },
});

const { value: facebook } = useField("facebook");
const { value: facebookURL, errorMessage: facebookURLError } =
  useField("facebookURL");

const { value: instagram } = useField("instagram");
const { value: instagramURL, errorMessage: instagramURLError } =
  useField("instagramURL");

const { value: linkedin } = useField("linkedin");
const { value: linkedinURL, errorMessage: linkedinURLError } =
  useField("linkedinURL");

const { value: youtube } = useField("youtube");
const { value: youtubeURL, errorMessage: youtubeURLError } =
  useField("youtubeURL");

const { value: twitter } = useField("twitter");
const { value: twitterURL, errorMessage: twitterURLError } =
  useField("twitterURL");

const handleSocialsEdit = async (values: any) => {
  const socialsArray = [
    {
      id: 0,
      platform: "facebook",
      username: values.facebook,
      link: values.facebookURL,
    },
    {
      id: 1,
      platform: "instagram",
      username: values.instagram,
      link: values.instagramURL,
    },
    {
      id: 2,
      platform: "linkedin",
      username: values.linkedin,
      link: values.linkedinURL,
    },
    {
      id: 3,
      platform: "youtube",
      username: values.youtube,
      link: values.youtubeURL,
    },
    {
      id: 4,
      platform: "twitter",
      username: values.twitter,
      link: values.twitterURL,
    },
  ];

  await editSocialsData(socialsArray);

  emit("refresh");
  emit("close");
};

const onSubmit = handleSubmit(handleSocialsEdit);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#000]/70 z-30"
  >
    <form
      @submit="onSubmit"
      class="w-full max-w-[24rem] flex flex-col items-center gap-4 p-4 bg-[#D9D9D9] rounded-xl pb-8 z-40 overflow-y-auto"
    >
      <p class="text-xl">Zmiana danych kontaktowych</p>
      <div
        class="w-full max-h-[28rem] md:max-h-full flex flex-col gap-4 overflow-y-auto md:overflow-hidden"
      >
        <div class="w-full flex flex-col gap-1">
          <span class="flex items-center gap-2">
            <i class="pi pi-facebook text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Facebook</p>
          </span>
          <input
            type="text"
            placeholder="Nazwa profilu"
            v-model="facebook"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <span v-if="facebook" class="w-full h-[3rem]">
            <input
              type="text"
              placeholder="URL"
              v-model="facebookURL"
              class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2"
            />
            <p
              v-if="facebookURLError"
              class="h-[1rem] text-sm text-red-500 ml-2"
            >
              {{ facebookURLError }}
            </p>
          </span>
        </div>

        <div class="w-full flex flex-col gap-1">
          <span class="flex items-center gap-2">
            <i class="pi pi-instagram text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Instagram</p>
          </span>
          <input
            type="text"
            placeholder="Nazwa profilu"
            v-model="instagram"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <span v-if="instagram" class="w-full h-[3rem]">
            <input
              type="text"
              placeholder="URL"
              v-model="instagramURL"
              class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2"
            />
            <p
              v-if="instagramURLError"
              class="h-[1rem] text-sm text-red-500 ml-2"
            >
              {{ instagramURLError }}
            </p>
          </span>
        </div>

        <div class="w-full flex flex-col gap-1">
          <span class="flex items-center gap-2">
            <i class="pi pi-linkedin text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Linkedin</p>
          </span>
          <input
            type="text"
            placeholder="Nazwa profilu"
            v-model="linkedin"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <span v-if="linkedin" class="w-full h-[3rem]">
            <input
              type="text"
              placeholder="URL"
              v-model="linkedinURL"
              class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2"
            />
            <p
              v-if="linkedinURLError"
              class="h-[1rem] text-sm text-red-500 ml-2"
            >
              {{ linkedinURLError }}
            </p>
          </span>
        </div>

        <div class="w-full flex flex-col gap-1">
          <span class="flex items-center gap-2">
            <i class="pi pi-youtube text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">YouTube</p>
          </span>
          <input
            type="text"
            placeholder="Nazwa profilu"
            v-model="youtube"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <span v-if="youtube" class="w-full h-[3rem]">
            <input
              type="text"
              placeholder="URL"
              v-model="youtubeURL"
              class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2"
            />
            <p
              v-if="youtubeURLError"
              class="h-[1rem] text-sm text-red-500 ml-2"
            >
              {{ youtubeURLError }}
            </p>
          </span>
        </div>

        <div class="w-full flex flex-col gap-1">
          <span class="flex items-center gap-2">
            <i class="pi pi-twitter text-lg text-[#777]"></i>
            <p class="text-lg text-[#777]">Twitter / X</p>
          </span>
          <input
            type="text"
            placeholder="Nazwa profilu"
            v-model="twitter"
            class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2 font-semibold"
          />
          <span v-if="twitter" class="w-full h-[3rem]"
            ><input
              type="text"
              placeholder="URL"
              v-model="twitterURL"
              class="bg-[#eee] w-full h-[2.5rem] rounded-lg outline-0 focus:outline-1 focus:outline-[#444] px-2"
            />
            <p
              v-if="twitterURLError"
              class="h-[1rem] text-sm text-red-500 ml-2"
            >
              {{ twitterURLError }}
            </p></span
          >
        </div>
      </div>

      <span class="w-full flex justify-around">
        <button
          @click="emit('close')"
          class="w-[8rem] h-[2.5rem] text-[#444] border-2 border-[#444] rounded-lg active:bg-[#333] active:text-[#eee] hover:bg-[#333] hover:border-[#333] hover:text-[#eee] hover:cursor-pointer"
        >
          Anuluj
        </button>
        <button
          v-if="!loading && meta.valid"
          type="submit"
          class="w-[8rem] h-[2.5rem] bg-[#444] text-[#eee] rounded-lg active:bg-[#333] hover:bg-[#333] hover:cursor-pointer"
        >
          Potwierdź
        </button>
        <button
          v-if="!loading && !meta.valid"
          type="submit"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          Potwierdź
        </button>
        <button
          v-if="loading"
          class="w-[8rem] h-[2.5rem] bg-[#444]/70 text-[#eee] rounded-lg"
        >
          <i class="pi pi-spinner pi-spin"></i>
        </button>
      </span>
    </form>
  </div>
</template>

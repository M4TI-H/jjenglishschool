import type { ContactData, SocialMedia } from "~/types/contact";

export function useContact() {
  const loading = ref<boolean>(false);
  const contactData = ref<ContactData>();
  const socialsData = ref<SocialMedia[]>();

  const fetchContactData = async () => {
    loading.value = true;
    const { data, error } = await fetchData<ContactData>(
      "/api/contacts/fetch_contacts"
    );
    if (error) console.error(error);
    else contactData.value = data ?? undefined;

    loading.value = false;
  };

  const fetchSocialMediaData = async () => {
    loading.value = true;
    const { data, error } = await fetchData<SocialMedia[]>(
      "/api/contacts/fetch_socials"
    );
    if (error) console.error(error);
    else {
      socialsData.value = data ?? [];
    }

    loading.value = false;
  };

  const editContactData = async (data: ContactData) => {
    loading.value = true;
    const { error } = await fetchData<ContactData>(
      `/api/contacts/editContacts`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (error) console.error(error);
    else {
      alert("Pomyślnie zaktualizowano dane!");
    }

    loading.value = false;
  };

  const editSocialsData = async (data: SocialMedia[]) => {
    loading.value = true;
    const { error } = await fetchData<SocialMedia[]>(
      `/api/contacts/editSocials`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (error) console.error(error);
    else {
      alert("Pomyślnie zaktualizowano dane!");
    }

    loading.value = false;
  };

  return {
    loading,
    contactData,
    socialsData,
    fetchContactData,
    fetchSocialMediaData,
    editContactData,
    editSocialsData,
  };
}

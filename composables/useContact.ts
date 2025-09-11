import type { ContactData, SocialMedia } from "~/types/contact";

export const useContactData = () => {
  const {
    data: contactData,
    pending: loading,
    error,
  } = useAsyncData<ContactData>("contact-data", () =>
    $fetch("/api/contacts/fetch_contacts")
  );

  return { contactData, loading, error };
};

export const useSocialsData = () => {
  const {
    data: socialsData,
    pending: loading,
    error,
  } = useAsyncData<SocialMedia[]>("socials-data", () =>
    $fetch("/api/contacts/fetch_socials")
  );

  return { socialsData, loading, error };
};

export function useContact() {
  const loading = ref<boolean>(false);

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
    editContactData,
    editSocialsData,
  };
}

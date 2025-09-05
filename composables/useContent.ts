import type CustomContent from "~/types/customContent";

export function useContent() {
  const loading = ref<boolean>(false);
  const customContentData = ref<CustomContent[]>([]);

  const fetchCustomContentData = async () => {
    loading.value = true;

    const { data, error } = await fetchData<CustomContent[]>(
      "/api/content/fetch_all"
    );
    if (error) console.error(error);
    else customContentData.value = data ?? [];

    loading.value = false;
  };

  const postNewCustomElement = async (data: CustomContent) => {
    loading.value = true;
    const { error } = await fetchData<CustomContent>("/api/content/post_new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        header: data.header,
        paragraph: data.paragraph,
        image_url: data.image_url,
        image_name: data.image_name,
      }),
    });

    if (error) console.error(error);
    else {
      alert("Dodano nowy element!");
    }
    loading.value = false;
  };

  const deleteCustomElement = async (index: number) => {
    loading.value = true;

    const { error } = await fetchData<null>(`/api/content/delete/${index}`, {
      method: "DELETE",
    });

    if (error) console.error(error);
    else {
      alert("Usunięto element!");
    }

    loading.value = false;
  };

  const editCustomElement = async (data: CustomContent) => {
    loading.value = true;
    const { error } = await fetchData<CustomContent>(
      `/api/content/edit/${data.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (error) console.error(error);
    else {
      alert("Pomyślnie zaktualizowano element!");
    }

    loading.value = false;
  };

  return {
    loading,
    customContentData,
    fetchCustomContentData,
    postNewCustomElement,
    editCustomElement,
    deleteCustomElement,
  };
}

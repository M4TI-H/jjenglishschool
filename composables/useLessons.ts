import type Lesson from "~/types/lesson";

export const useActiveLessons = () => {
  const {
    data: activeLessonsData,
    pending: loading,
    error,
  } = useAsyncData<Lesson[]>("active-lessons", () =>
    $fetch("/api/lessons/fetch_active")
  );

  return { activeLessonsData, loading, error };
};

export function useLessons() {
  const loading = ref<boolean>(false);
  const lessonsData = ref<Lesson[]>([]);

  const fetchLessons = async () => {
    loading.value = true;

    const { data, error } = await fetchData<Lesson[]>("/api/lessons/fetch_all");
    if (error) console.error(error);
    else lessonsData.value = data ?? [];

    loading.value = false;
  };

  const postNewLesson = async (data: Lesson) => {
    loading.value = true;
    const { error } = await fetchData<Lesson>("/api/lessons/post_new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        duration: data.duration,
        isActive: data.isActive,
      }),
    });

    if (error) console.error(error);
    else {
      alert("Dodano nową ofertę!");
    }
    loading.value = false;
  };

  const deleteLesson = async (index: number) => {
    loading.value = true;

    const { error } = await fetchData<null>(`/api/lessons/delete/${index}`, {
      method: "DELETE",
    });

    if (error) console.error(error);
    else {
      alert("Usunięto ofertę!");
    }

    loading.value = false;
  };

  const editLesson = async (data: Lesson) => {
    loading.value = true;
    const { error } = await fetchData<Lesson>(`/api/lessons/edit/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (error) console.error(error);
    else {
      alert("Pomyślnie zaktualizowano ofertę!");
    }

    loading.value = false;
  };

  const switchActivity = async (index: number, activity: boolean) => {
    const { error } = await fetchData<Lesson>(
      `/api/lessons/change_activity/${index}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isActive: activity }),
      }
    );

    if (error) console.error(error);
  };

  return {
    loading,
    lessonsData,
    fetchLessons,
    postNewLesson,
    deleteLesson,
    editLesson,
    switchActivity,
  };
}

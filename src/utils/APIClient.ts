import axios from "axios";

const { VITE_BACKEND_URL } = import.meta.env;

export const getGroupings = async () => {
  const {data} = await axios.get(
    `${VITE_BACKEND_URL}/api/groupings`
  );

  return data;
}

export const getPracticeKanji = async (groupId : any) => {
  const { data } = await axios.get(
    `${VITE_BACKEND_URL}/api/groupings/${groupId}/practice`
  );

  return data;
}
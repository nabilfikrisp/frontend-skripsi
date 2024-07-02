import { api } from "./axios.config";

export async function api_post_predict(file: File) {
  const { data } = await api.post(
    "/predict",
    {file: file},
    {headers: {"Content-Type": "multipart/form-data"}}
  );

  return data;
}

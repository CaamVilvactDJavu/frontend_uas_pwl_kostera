import axios from "axios";
import useSWR from "swr";

const useKosts = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR("/api/v1/kost/", fetcher);

  return { data, error, isLoading };
};

export default useKosts;

import axios from "axios";
import useSWR from "swr";

interface UseKostProps {
  id: string;
}

const useKost = ({ id }: UseKostProps) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `/api/v1/kost/?kostId=${id}`,
    fetcher,
  );

  return { data, error, isLoading };
};

export default useKost;

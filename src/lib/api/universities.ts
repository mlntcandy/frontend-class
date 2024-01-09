import { useEffect, useState } from "react";

export interface University {
  id: number;
  name: string;
  alpha_two_code: string; // ISO 3166-1 alpha-2 code, e.g. "US"
  country: string;
  web_pages: string[];
  domains: string[];
}

export const useUniversities = (perPage: number, defaultPage = 0) => {
  const [data, setData] = useState<University[] | null>(null);
  const [page, setPage] = useState(defaultPage);

  useEffect(() => {
    setData(null);
    fetch(
      `http://universities.hipolabs.com/search?offset=${
        page * perPage
      }&limit=${perPage}`
    )
      .then((response) => response.json())
      .catch(() => null)
      .then(setData);
  }, [page, perPage]);

  return {
    data,
    page,
    setPage,
  };
};

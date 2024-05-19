import { useEffect } from "react";
import { UniversityCard } from "./UniversityCard";
import { useUniversities } from "../lib/api/universities";
import { useInView } from "react-intersection-observer";

export const DynamicPagination: React.FC = () => {
  const { data, loading, page, setPage } = useUniversities(15, 1, true);

  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
    }
  }, [inView, setPage]);

  return (
    <div>
      <h1>List Universities</h1>
      {(data ?? []).map((university) => (
        <UniversityCard data={university} key={university.name} />
      ))}
      {loading && <div>Loading...</div>}
      {!loading && <div ref={ref}></div>}
    </div>
  );
};

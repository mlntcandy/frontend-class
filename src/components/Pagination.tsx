export type PaginationProps = {
  page: number;
  onChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = (props) => {
  const back = () => {
    if (props.page === 0) return;
    props.onChange(props.page - 1);
  };
  const next = () => props.onChange(props.page + 1);

  return (
    <div>
      <button onClick={back} disabled={props.page === 0}>
        &lt;
      </button>
      <span style={{ margin: "0 1em" }}>{props.page + 1}</span>
      <button onClick={next}>&gt;</button>
    </div>
  );
};

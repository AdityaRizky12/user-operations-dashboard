type FilterBarProps = {
  pendingOnly: boolean;
  onPendingOnlyChange: (value: boolean) => void;
};

const FilterBar = ({
  pendingOnly,
  onPendingOnlyChange,
}: FilterBarProps) => {
  return (
    <label className="flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-md border bg-background px-3 text-sm lg:w-auto">
      <input
        type="checkbox"
        checked={pendingOnly}
        onChange={(event) => onPendingOnlyChange(event.target.checked)}
        className="h-4 w-4"
      />

      Pending ≥ 12
    </label>
  );
};

export default FilterBar;
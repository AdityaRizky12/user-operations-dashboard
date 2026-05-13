const EmptyState = () => {
  return (
    <div className="rounded-xl border bg-background p-10 text-center">
      <h2 className="text-lg font-semibold">No users found</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Try adjusting your search or filters.
      </p>
    </div>
  );
};

export default EmptyState;
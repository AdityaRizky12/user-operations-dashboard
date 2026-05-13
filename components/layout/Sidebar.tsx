import SidebarContent from "@/components/layout/SidebarContent";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r bg-background min-h-screen p-4">

      <div className="mb-8">
        <h2 className="text-xl font-bold">
          UserOps
        </h2>

        <p className="text-sm text-muted-foreground">
          Dashboard
        </p>
      </div>

      <SidebarContent />
    </aside>
  );
};

export default Sidebar;
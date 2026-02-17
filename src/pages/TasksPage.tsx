const TasksPage = () => (
  <div className="flex-1 min-h-screen">
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b px-6 py-4 md:px-8">
      <h1 className="text-2xl font-bold text-foreground">Tasks</h1>
      <p className="text-sm text-muted-foreground">Manage and track team tasks.</p>
    </header>
    <main className="p-6 md:p-8">
      <div className="rounded-xl border bg-card p-12 text-center">
        <p className="text-muted-foreground">Task management coming soon.</p>
      </div>
    </main>
  </div>
);
export default TasksPage;

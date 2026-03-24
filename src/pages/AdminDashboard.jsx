import { LayoutDashboard, Settings2, ShieldCheck } from "lucide-react";

const adminCards = [
  "Content controls for destinations, packages, and stories",
  "Role-sensitive access for operational workflows",
  "A better admin experience can be layered in from here",
];

function AdminDashboard() {
  return (
    <main className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-orange-100/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.92),rgba(255,255,255,0.96))] p-6 shadow-sm sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-orange-700 shadow-sm">
          <ShieldCheck className="size-4" />
          Admin space
        </div>
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          Admin Dashboard
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
          This screen is still a placeholder, but it now matches the rest of
          the product and gives you a cleaner base for future admin tools.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.75rem] border border-orange-100 bg-white/90 p-5 shadow-sm">
            <LayoutDashboard className="size-5 text-orange-600" />
            <p className="mt-4 text-sm font-medium text-stone-900">
              Structured control panel
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              A visual foundation for content management and reporting.
            </p>
          </article>

          <article className="rounded-[1.75rem] border border-orange-100 bg-white/90 p-5 shadow-sm md:col-span-2">
            <Settings2 className="size-5 text-orange-600" />
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
              {adminCards.map((item) => (
                <li key={item} className="rounded-2xl bg-orange-50/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </main>
  );
}

export default AdminDashboard;

import Link from "next/link";

export default function AuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const mode = (searchParams?.mode as string) || "choose";
  const siteUrl = (searchParams?.url as string) || "";

  return (
    <main className="min-h-[60vh] bg-background text-foreground">
      <section className="container mx-auto px-6 py-24">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Continue</h1>
        <p className="text-muted-foreground mb-10">
          We saved your site URL and will personalize the experience.
        </p>

        {siteUrl ? (
          <div className="mb-8 rounded-none border border-border p-4">
            <p className="text-sm text-muted-foreground">Website</p>
            <p className="font-medium break-words">{decodeURIComponent(siteUrl)}</p>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="bg-primary text-primary-foreground px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Go Home
          </Link>
          <Link
            href={`/?from=auth&mode=${encodeURIComponent(mode)}`}
            className="bg-secondary text-secondary-foreground px-6 py-3 hover:opacity-80 transition-opacity"
          >
            Back to Start
          </Link>
        </div>
      </section>
    </main>
  );
}
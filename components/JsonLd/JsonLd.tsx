// Renders a JSON-LD structured-data <script> tag.
// Pattern per node_modules/next/dist/docs/01-app/02-guides/json-ld.md —
// a raw <script>, not next/script, since JSON-LD isn't executable JS.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}

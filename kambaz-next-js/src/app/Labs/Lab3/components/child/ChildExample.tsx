
export default function ChildExample({ title, count }: { title: string; count: number; }) {
  return (
    <div style={{ border: "1px dashed #ccc", padding: 8 }}>
      <p><strong>{title}</strong></p>
      <p>Count prop: {count}</p>
      <p>Rendered with props (child component).</p>
    </div>
  );
}

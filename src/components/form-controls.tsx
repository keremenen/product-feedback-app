export default function FormControls({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-end gap-x-4">{children}</div>;
}

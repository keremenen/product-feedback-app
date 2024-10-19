export default function FormWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative w-full rounded-md bg-primary-white px-[2.625rem] pb-10 pt-[3.25rem]">
      {children}
    </section>
  );
}

export default function FormLogo({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-purple-gradient absolute -top-7 flex size-14 items-center justify-center rounded-full">
      {children}
    </div>
  );
}

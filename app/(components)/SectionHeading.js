export default function SectionHeading({ children }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">{children}</h2>
      <div className="mt-4 mx-auto w-16 h-1 bg-slate-500"></div>
    </div>
  )
}

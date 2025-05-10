import Link from "next/link"

export default function Button({ children, href, variant = "primary", size = "md", className = "", ...props }) {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-lg transition-colors"

  const variants = {
    primary: "bg-slate-600 text-white hover:bg-slate-700",
    outline: "border-2 border-slate-600 text-slate-600 hover:bg-slate-50",
    ghost: "text-slate-600 hover:bg-slate-50",
  }

  const sizes = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  }

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  )
}

import { ReactNode } from "react"

interface containerProps {
  className?: string
  children: ReactNode
}

function Container({ className, children }: containerProps) {
  return <div className={className}>{children}</div>
}

export { Container }

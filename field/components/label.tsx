import { ReactNode } from "react"
import { useFieldContext } from "../useContext"

interface labelProps {
  outerClassName?: string
  innerClassName?: string
  text: string
  children?: ReactNode
}

function Label({ outerClassName, innerClassName, children, text }: labelProps) {
  const { name } = useFieldContext()

  return (
    <label className={outerClassName} htmlFor={name}>
      <span className={innerClassName}>{text}</span>
      {children && children}
    </label>
  )
}

export { Label }

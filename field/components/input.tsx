import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { useFieldContext } from "../useContext"

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  autoComplete: string
  className?: string
  children?: ReactNode
  id?: string
  optional?: boolean
  placeholder?: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
}

export const Input = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ children, ...props }, ref) => {
    const { id } = props
    const { register, formState, name } = useFieldContext()
    const { isSubmitting } = formState

    const elemId = id === undefined ? name : id

    return (
      <>
        <input
          id={elemId}
          disabled={isSubmitting}
          {...register(name)}
          {...props}
        />
        {children}
      </>
    )
  },
)

import { forwardRef } from "react"
import { useFieldContext } from "../useContext"

export const Hidden = forwardRef<HTMLInputElement>(
  ({ children, ...props }, ref) => {
    const { register, name } = useFieldContext()

    return (
      <>
        <input
          id={`hidden_${name}`}
          {...register(name)}
          {...props}
          type="hidden"
        />
        {children}
      </>
    )
  },
)

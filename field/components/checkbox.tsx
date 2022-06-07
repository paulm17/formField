import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { Controller } from "react-hook-form"
import { useFieldContext } from "../useContext"
import ReactCheckbox from "rc-checkbox"
import "rc-checkbox/assets/index.css"

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  className?: string
  children?: ReactNode
  id?: string
}

export const Checkbox = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
  ({ children, ...props }, ref) => {
    const { id } = props
    const { control, formState, name } = useFieldContext()
    const { isSubmitting } = formState

    const elemId = id === undefined ? name : id

    return (
      <>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <ReactCheckbox
              id={elemId}
              disabled={isSubmitting}
              checked={value}
              onChange={onChange}
              {...props}
            />
          )}
        />
        {children}
      </>
    )
  },
)

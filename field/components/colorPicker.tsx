import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { Controller } from "react-hook-form"
import { ColorPicker as ReactColorPicker } from "@flashcards/ui"
import { useFieldContext } from "../useContext"

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["select"]> {
  className?: string
  children?: ReactNode
  id?: string
}

export const ColorPicker = forwardRef<HTMLSelectElement, LabeledTextFieldProps>(
  ({ children, ...props }, ref) => {
    const { id, className } = props
    const { control, formState, name } = useFieldContext()
    const { isSubmitting } = formState

    const elemId = id === undefined ? name : id

    return (
      <>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <div id={elemId} className={className}>
              <ReactColorPicker
                theme="default"
                showAlpha
                value={value}
                onChange={onChange}
              />
            </div>
          )}
        />
        {children}
      </>
    )
  },
)

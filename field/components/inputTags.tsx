import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { Controller } from "react-hook-form"
import { useFieldContext } from "../useContext"
import { InputTags as ReactInputTags } from "@flashcards/ui"

type Item = { id: string; name: string }

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {
  children?: ReactNode
  className?: string
  id?: string
  placeholder?: string
  options: Item[]
  readonly?: boolean
  position?: "top" | "bottom"

  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text"
}

export const InputTags = forwardRef<HTMLInputElement, LabeledTextFieldProps>(
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
              <ReactInputTags
                allowNew
                isDisabled={isSubmitting}
                options={props.options}
                onChange={onChange}
                placeholder={props.placeholder || ""}
                readOnly={props.readonly}
                textKey="name"
                value={value}
              />
            </div>
          )}
        />
        {children}
      </>
    )
  },
)

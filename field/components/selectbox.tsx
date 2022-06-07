import { forwardRef, PropsWithoutRef, ReactNode, useRef } from "react"
import { Controller } from "react-hook-form"
import ReactSelect from "react-select"
import { useFieldContext } from "../useContext"

export interface LabeledTextFieldProps
  extends PropsWithoutRef<JSX.IntrinsicElements["select"]> {
  className?: string
  children?: ReactNode
  id?: string
  options: any[]
  styles: any
}

export const Selectbox = forwardRef<HTMLSelectElement, LabeledTextFieldProps>(
  ({ children, ...props }, ref) => {
    const selectRef = useRef(null)
    const { id, className, options, styles } = props
    const { control, formState, name } = useFieldContext()
    const { isSubmitting } = formState

    const elemId = id === undefined ? name : id

    return (
      <>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value, ref } }) => (
            <ReactSelect
              ref={selectRef}
              options={options}
              value={options.find(option => option.value === value.value)}
              onChange={onChange}
              instanceId={elemId}
              className={className}
              isSearchable={false}
              isClearable={false}
              isDisabled={isSubmitting}
              menuPosition={"fixed"}
              styles={styles}
            />
          )}
        />
        {children}
      </>
    )
  },
)

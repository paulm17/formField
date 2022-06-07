import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import { FontAwesomeIcon, RegularIcons } from "@flashcards/ui"

interface buttionIconProps {
  action: string | undefined
  icon: string
  isSubmtting: boolean
}

function ButtonIcon({ action, icon, isSubmtting }: buttionIconProps) {
  if (action === "submit") {
    if (!isSubmtting) {
      return <FontAwesomeIcon icon={icon as RegularIcons} />
    } else {
      return <FontAwesomeIcon icon="spinner" spin />
    }
  } else {
    return <FontAwesomeIcon icon={icon as RegularIcons} />
  }
}

export interface FormButtonProps
  extends PropsWithoutRef<JSX.IntrinsicElements["button"]> {
  action?: "submit" | "cancel"
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: "submit" | "button" | "reset"
  isSubmitting?: boolean
  disabled?: boolean
  children?: ReactNode
  icon?: string
}

export const FormButton = forwardRef<HTMLInputElement, FormButtonProps>(
  ({ className, name, ...props }, ref) => {
    const btnDefaultClass =
      "text-white border rounded-sm px-3 py-1.5 transition duration-150 ease-in-out focus:outline-none w-[inherit]"
    const btnSubmitClass = `${btnDefaultClass} bg-green-500 border-green-500 hover:bg-green-700`
    const btnSubmitDisabledClass = `${btnSubmitClass} opacity-60 pointer-events-none select-none`
    const btnCancelClass = `${btnDefaultClass} bg-gray-500 border-gray-500 hover:bg-gray-700`
    const btnCancelDisabledClass = `${btnCancelClass} opacity-60 pointer-events-none`
    const btnDisabledClass =
      props.action === "submit"
        ? btnSubmitDisabledClass
        : btnCancelDisabledClass
    const btnClass = props.action === "submit" ? btnSubmitClass : btnCancelClass

    const { formState } = useFormContext()
    const isSubmitting = props.isSubmitting
      ? props.isSubmitting
      : formState.isSubmitting

    return (
      <div className={className}>
        <button
          type={props.type}
          disabled={props.disabled || isSubmitting}
          className={
            props.disabled || isSubmitting ? btnDisabledClass : btnClass
          }
          onClick={props.onClick ? props.onClick : undefined}
        >
          {props.icon && (
            <>
              <ButtonIcon
                action={props.action}
                icon={props.icon}
                isSubmtting={formState.isSubmitting}
              />
            </>
          )}
          <span className={props.icon ? "ml-2" : ""}>{props.children}</span>
        </button>
      </div>
    )
  },
)

export default FormButton

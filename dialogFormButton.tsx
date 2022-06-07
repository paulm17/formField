import { forwardRef, PropsWithoutRef, ReactNode } from "react"
import { useFormContext } from "react-hook-form"
import { FontAwesomeIcon } from "@flashcards/ui"

interface buttionIconProps {
  action: string | undefined
  icon: string
  isSubmtting: boolean
}

function ButtonIcon({ action, icon, isSubmtting }: buttionIconProps) {
  if (action === "submit") {
    if (!isSubmtting) {
      return <FontAwesomeIcon icon={icon as any} />
    } else {
      return <FontAwesomeIcon icon="spinner" spin />
    }
  } else {
    return <FontAwesomeIcon icon={icon as any} />
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

export const DialogFormButton = forwardRef<HTMLInputElement, FormButtonProps>(
  ({ className, name, ...props }, ref) => {
    let buttonClass =
      "w-full inline-flex items-center justify-center border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-0"
    buttonClass = `${buttonClass} ${
      props.type === "submit"
        ? "bg-green-600 hover:bg-green-700"
        : "bg-gray-600 hover:bg-gray-700"
    }`

    const buttonDisabledClass = `${buttonClass} opacity-60 pointer-events-none`

    const { formState } = useFormContext()
    const isSubmitting = props.isSubmitting
      ? props.isSubmitting
      : formState.isSubmitting

    return (
      <button
        type={props.type}
        disabled={props.disabled || isSubmitting}
        className={
          props.disabled || isSubmitting ? buttonDisabledClass : buttonClass
        }
        onClick={props.onClick ? props.onClick : undefined}
      >
        {props.icon && (
          <>
            <ButtonIcon
              action={props.action}
              icon={props.icon}
              isSubmtting={isSubmitting}
            />
          </>
        )}
        <span className={props.icon ? "ml-2" : ""}>{props.children}</span>
      </button>
    )
  },
)

export default DialogFormButton

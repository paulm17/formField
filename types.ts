import { ReactNode, PropsWithoutRef } from "react"
import { UseFormProps } from "react-hook-form"
import { RegularIcons } from "@flashcards/ui"
import { z } from "zod"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<JSX.IntrinsicElements["form"]>, "onSubmit"> {
  title: string
  outerClassName?: string
  innerClassName?: string
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitIcon: RegularIcons
  submitText?: string
  schema?: S
  onSubmit: (values: z.infer<S>) => Promise<void | OnSubmitResult>
  onCancel?: (values: z.infer<S>) => void
  initialValues?: UseFormProps<z.infer<S>>["defaultValues"]
}

export const FORM_ERROR = "FORM_ERROR"

interface OnSubmitResult {
  FORM_ERROR?: string
  [prop: string]: any
}

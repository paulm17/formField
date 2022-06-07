import { ReactNode } from "react"
import { FieldProvider } from "./useContext"
import { useFormContext } from "react-hook-form"
import {
  Checkbox,
  ColorPicker,
  Container,
  Hidden,
  Input,
  InputTags,
  Label,
  Error,
  Selectbox,
} from "./components"

interface counterProps {
  children: ReactNode
  value: string
}

function Field({ children, value }: counterProps) {
  const context = useFormContext()

  if (context === null) {
    return null
  }

  const { control, register, formState } = context

  return (
    <FieldProvider value={{ control, register, formState, name: value }}>
      {children}
    </FieldProvider>
  )
}

Field.Container = Container
Field.ColorPicker = ColorPicker
Field.Checkbox = Checkbox
Field.Hidden = Hidden
Field.Input = Input
Field.InputTags = InputTags
Field.Label = Label
Field.Error = Error
Field.Selectbox = Selectbox

export default Field

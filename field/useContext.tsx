import { createContext, useContext } from "react"
import {
  Control,
  FieldValues,
  FormState,
  UseFormRegister,
} from "react-hook-form"

export interface Context {
  control: Control<FieldValues, any>
  register: UseFormRegister<FieldValues>
  formState: FormState<FieldValues>
  name: string
}

const FieldContext = createContext({} as Context)

function FieldProvider({ children, value }: any) {
  return <FieldContext.Provider value={value}>{children}</FieldContext.Provider>
}

function useFieldContext() {
  const context = useContext(FieldContext)
  if (context === undefined) {
    throw new Error("useFieldContext must be used within a FieldProvider")
  }
  return context
}

export { FieldProvider, useFieldContext }

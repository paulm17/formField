import { useFieldContext } from "../useContext"

interface errorProps {
  className?: string
}

function Error({ className }: errorProps) {
  const { formState, name } = useFieldContext()
  const { errors } = formState

  const error = Array.isArray(errors[name])
    ? errors[name].join(", ")
    : errors[name]?.message || errors[name]

  return <>{error && <span className={className}>{error}</span>}</>
}

export { Error }

import { MutableRefObject } from "react"

interface formErrorFooterProps {
  hasErrors: MutableRefObject<string>
}

function FormErrorFooter({ hasErrors }: formErrorFooterProps) {
  return (
    <>
      {hasErrors.current.length > 0 && (
        <div className="my-1 flex">
          <span className="block w-full text-center text-[14px] text-red-500">
            {hasErrors}
          </span>
        </div>
      )}
    </>
  )
}

export default FormErrorFooter

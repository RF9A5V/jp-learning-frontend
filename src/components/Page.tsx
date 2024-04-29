import { Props } from "../types";

export default function Page({ children } : Props) {
  return (
    <div className="page">
      { children }
    </div>
  )
}
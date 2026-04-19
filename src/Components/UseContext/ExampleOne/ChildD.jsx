import React from 'react'

export const ChildD = () => {
  return (
    <div>
      Component D
    </div>
  )
}

export const ChildF = () => {
  return (
    <div>
      Component F
    </div>
  )
}
// If used only use above 2 non-default exports it really works and these can be exported without default export

// LEGAL way of writing default exports - below
export const ChildE = () => {
  return (
    <div>
      Component E
    </div>
  )
}
export default ChildE


// export default function ChildE(){
//   return (
//     <div>
//       Component E
//     </div>
//   )
// }

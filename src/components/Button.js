/**
 * Reusable button component
 */

import { IoIosAddCircleOutline } from "react-icons/io";

export const Button = ({name="Delete", weight, icon=false, margin}) =>{
    return(
        <button className={`p-2 text-sm ${margin} border-gray-300 border-l border-r border-b border-t flex items-center gap-4 ${weight} rounded-xl`}>
              {name}
              {
                icon && <IoIosAddCircleOutline/>
              }

            </button>
    )
}


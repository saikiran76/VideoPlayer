import { IoIosAddCircleOutline } from "react-icons/io";

const Button = ({name="Delete", weight, icon=false, margin}) =>{
    return(
        <button className={`p-3 text-sm ${margin} border-gray-300 border-l border-r border-b border-t flex items-center gap-4 ${weight} `}>
              {name}
              {
                icon && <IoIosAddCircleOutline/>
              }

            </button>
    )
}

export default Button;
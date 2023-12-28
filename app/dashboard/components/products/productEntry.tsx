import { FaRegTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import Link from 'next/link'

type EntryProps = {
  id: string,
  name: string,
  description: string,
  category: string,
  inventory: number
};

const ProductEntry = ({
  id,
  name,
  description,
  category,
  inventory
}: EntryProps) => {
  const status = inventory > 0 ? "I Lager" : "Slut i Lager";
  const statusColor = inventory > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="grid grid-cols-3 font-medium gap-4 px-6 py-4 bg-white border rounded-lg items-center">
      <div className="flex items-center gap-x-3">
	<input
	  type="checkbox"
	  className="flex-shrink-0 w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
	/>
	<div className="flex flex-col gap-y-1 truncate">
	  <div className="truncate text-md text-gray-600">
	    {name}
	  </div>
	  <div className="truncate text-sm text-gray-400">
	    {description}
	  </div>
	</div>
      </div>

      <div className="grid grid-cols-3 gap-64">
	<div className="w-[200px]">
	  <div className="w-fit bg-blue-500 px-4 py-1 rounded-full">
	    <div className="text-md text-white text-center">
	      {category}
	    </div>
	  </div>
	</div>

	<div className="flex items-center">
	  <div className="text-md text-gray-600 w-[100px]">
	    {inventory}
	  </div>
	</div>

	<div className="flex items-center w-[100px]">
	  <div className={`text-md ${statusColor} w-[100px]`}>
	    {status}
	  </div>
	</div>
      </div>

      <div className="flex gap-x-3 justify-end items-center">
        <Link href={`/dashboard/edit-product?id=${encodeURIComponent(id)}`}>
	  <FiEdit className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
	</Link>
	<FaRegTrashAlt className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </div>
    </div>
  )
}

export default ProductEntry;

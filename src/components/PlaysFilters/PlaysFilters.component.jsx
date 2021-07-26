import { Disclosure } from '@headlessui/react';
import { BiChevronDown, BiChevronUp } from "react-icons/bi"

const PlaysFilter = (props) => {
    return (
        <Disclosure>
            {
                ({ open }) => (
                    <>
                        <Disclosure.Button className="gap-2 py-2 flex items-center">
                            {open ? <BiChevronUp /> : <BiChevronDown />}
                            <span className={open ? "text-red-600" : "text-gray-700"}>
                                {props.title}
                            </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500 ">
                            <div className="flex items-center gap-3 flex-wrap">
                                {props.tags.map((tag) => (
                                <>
                                    <div className="border-2 border-gray-300 px-3 rounded py-2">
                                        <span className="text-red-600">{tag}</span>
                                    </div>
                                </>))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )
            }
        </Disclosure>
    )
}

export default PlaysFilter;
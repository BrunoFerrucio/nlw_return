import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { WidgetForm } from "./WidgetForm";

export function Widget() {
  return (
    <Popover className="absolute bottom-5 right-5 md:bottom-8 md:right-8 flex flex-col items-end">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>

    </Popover>
  )

  // ANTES DA ACESSIBILIDADE
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false) // Retorna primeiro o valor do state, Permite mudar o valor do state

  // function toggleWidgetVisibility() {
  //     setIsWidgetOpen(!isWidgetOpen); // Muda o state
  // }

  // return (
  //     <div className="absolute bottom-5 right-5">
  //         { isWidgetOpen && <p>Hello Word!</p>} {/* Só executa de for verdadeiro */}

  //         <button onClick={toggleWidgetVisibility} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
  //             <ChatTeardropDots className="w-6 h-6"/>
  //             <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
  //                 <span className="pl-2"></span>
  //                 Feedback
  //             </span>
  //         </button>

  //     </div>
  // )
}
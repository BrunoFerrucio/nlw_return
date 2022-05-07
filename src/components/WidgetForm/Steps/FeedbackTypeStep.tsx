import { CloseButton } from "../../CloseButton";

import { FeedbackType, feedbackTypes } from "..";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void // (Declara o tipo) => Retorna void
}

// export function FeedbackTypeStep(props: FeedbackTypeStepProps) { // Outro jeito de se usar um parâmetro/função do outro componente
export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps ) {
  return (
    <> {/* No React isso se chama fragmento (Não interfere no layout e não é mostrado no HTML) */}
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <img src={value.image.soucer} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  )
}
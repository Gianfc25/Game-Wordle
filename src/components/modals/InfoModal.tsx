import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="
    How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the hidden word in five tries.
        Each guess must be a valid 5 letter word
        After each attempt the color of the letters changes
        to show how close you are to getting the word right
        Examples:
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="K"
          status="correct"
        />
        <Cell value="N" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell value="F" isCompleted={true} />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">

        The letter K is in the word and in the correct position
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="V" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="T"
          status="present"
        />
        <Cell value="A" isCompleted={true} />
        <Cell value="L" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter T is in the word but in the wrong position
      </p>

      <div className="mb-1 mt-4 flex justify-center">
        <Cell value="P" isCompleted={true} />
        <Cell value="R" isCompleted={true} />
        <Cell value="I" isCompleted={true} />
        <Cell isRevealing={true} isCompleted={true} value="C" status="absent" />
        <Cell value="E" isCompleted={true} />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">

        The letter C is not in the word
      </p>

      <p className="mt-6 text-sm italic text-gray-500 dark:text-gray-300">

        There may be repeat letters. The clues are independent for each letter      </p>
    </BaseModal>
  )
}

import { ReactNode } from 'react';

interface Props {
  content: ReactNode;
  onClose: () => void;
}

function Modal(props: Props) {
  return (
    <>
      <div
        className="fixed top-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm overflow-x-hidden overflow-y-auto"
        onClick={props.onClose}
      ></div>
      <div className="fixed top-0 mx-auto z-50 bg-gray-100 border-solid border-2">
        <button
          className="float-right ml-4 bg-gray-100 border-solid border-2 rounded-full"
          onClick={props.onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {!props.content && 'Progressing...'}
        {props.content}
      </div>
    </>
  );
}

export default Modal;

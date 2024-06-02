import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-full sm:w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all duration-200 ease-in-out focus-visible:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:text-black disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed cursor-pointer"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Send{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitBtn;

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group gap-2 w-full sm:w-[8rem] rounded-full outline-none focus-visible:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 disabled:cursor-not-allowed cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-all duration-200 ease-in-out"
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

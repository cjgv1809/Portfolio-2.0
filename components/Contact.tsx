"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSectionInView } from "@/hooks/useSectionInView";
import { sendEmail } from "@/actions/sendEmail";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";

function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (formData: FormData) => {
    const { error, data } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Email sent successfully!");
    // reset form fields
    formRef.current?.reset();
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline underline-offset-4"
          href="mailto:carlos_gomes1809@hotmail.com"
        >
          carlos_gomes1809@hotmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={handleSubmit}
        ref={formRef}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white/10 dark:text-white transition-all outline-none focus-visible:outline-gray-300 focus:outline-gray-300 dark:focus:outline-slate-600 dark:focus-visible:outline-slate-600"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Enter your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white/10 dark:text-white transition-all outline-none focus-visible:outline-gray-300 focus:outline-gray-300 dark:focus:outline-slate-600 dark:focus-visible:outline-slate-600 resize-none"
          name="message"
          placeholder="Enter your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
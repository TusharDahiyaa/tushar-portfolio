import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { IoIosSend } from "react-icons/io";
import { LampContainer } from "./ui/lamp";
import { Report } from "notiflix/build/notiflix-report-aio";
import axios from "axios";

export function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client-side validation
    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post(
        "https://tushardev-api.onrender.com/userMessage",
        formData
      );

      if (response.data.success === true) {
        Report.success(
          "Holaaa!",
          "Thanks for your message. I'll get back to you soon.",
          "Okay"
        );
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          message: "",
        });
      } else if (response.data.message === "duplicate email address") {
        Report.failure(
          "Error",
          "A message is already sent with this email address.",
          "Okay"
        );
      }
    } catch (error) {
      Report.failure(
        "Oops!",
        "There was an error sending your message. Please try again.",
        "Okay"
      );
    }
  };

  const validateForm = () => {
    const { firstname, lastname, email, message } = formData;

    // Basic validation
    if (!firstname || !lastname || !email || !message) {
      Report.failure("Error", "All fields are required.", "Okay");
      return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Report.failure("Error", "Invalid email format.", "Try again");
      return false;
    }

    return true;
  };

  return (
    <LampContainer>
      <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-neutral-200 mt-52">
        Contact Me
      </h1>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-stone-950 mt-5">
        <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200">
          Have a question or want to work together?
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Let's collaborate and discuss your project 🚀
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input
                id="firstname"
                placeholder="First Name"
                type="text"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input
                id="lastname"
                placeholder="Last Name"
                type="text"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="Your email address here.."
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              className={cn(
                `flex w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent 
                file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                disabled:cursor-not-allowed disabled:opacity-50
                dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                group-hover/input:shadow-none transition duration-400
                `
              )}
              placeholder="Enter your message here..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>

          <button
            className="flex gap-2 items-center justify-center bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send <IoIosSend />
            <BottomGradient />
          </button>
        </form>
      </div>
    </LampContainer>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

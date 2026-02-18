export function Contact() {
  return (
    <div className="mt-24 md:mt-32 w-full flex justify-center px-4">
      <div
        className="max-w-lg w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 
                        bg-white/70 dark:bg-stone-950/80 backdrop-blur-md 
                        shadow-xl p-8 md:p-10 text-center hover:shadow-2xl transition-shadow duration-300"
      >
        <h1 className="font-bold text-3xl md:text-5xl text-neutral-800 dark:text-neutral-200 mb-6">
          Let’s Connect
        </h1>
        <div className="h-px w-32 md:w-52 mx-auto mb-6 bg-gradient-to-r from-transparent via-neutral-400 to-transparent" />

        <p className="text-neutral-600 dark:text-neutral-300 mb-10 leading-relaxed">
          If you have a concrete project, system, or automation requirement,
          reach out through the channels below.
        </p>

        <div className="space-y-6 text-base md:text-lg">
          <div className="group">
            <p className="text-neutral-500 text-sm mb-1">Email</p>
            <a
              href="mailto:tushar@yourdomain.com"
              className="font-semibold text-neutral-800 dark:text-neutral-100 underline underline-offset-4 
                           decoration-neutral-400 group-hover:decoration-neutral-600
                           transition-colors"
            >
              primary.techops@gmail.com
            </a>
          </div>

          <div className="group">
            <p className="text-neutral-500 text-sm mb-1">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/tushardahiya"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-neutral-800 dark:text-neutral-100 underline underline-offset-4 
                           decoration-neutral-400 group-hover:decoration-neutral-600
                           transition-colors"
            >
              linkedin.com/in/tushardahiya
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-xs text-neutral-500">
            Typical response time: 24–48 hours
          </p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function TestPrepTips() {
  return (
    <div>
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full  flex flex-col gap-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div>
                <header className="mb-4 lg:mb-6 not-format">
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    IELTS exam prep tips
                  </h1>
                </header>

                <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
                  <li>At least 10 characters (and up to 100 characters)</li>
                  <li>At least one lowercase character</li>
                  <li>
                    Inclusion of at least one special character, e.g., ! @ # ?
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TestPrepTips;

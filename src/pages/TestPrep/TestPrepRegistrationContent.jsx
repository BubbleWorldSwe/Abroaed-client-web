import React from "react";

function TestPrepRegistrationContent() {
  return (
    <div>
      <div>
        <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
          <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
            <article className="mx-auto w-full  flex flex-col gap-8 format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
              <div>
                <header className="mb-4 lg:mb-6 not-format">
                  <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                    Steps to register for IELTS exam
                  </h1>
                </header>

                <ol className="space-y-4 text-gray-500 list-decimal list-inside dark:text-gray-400">
                  <li>
                    List item one
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>
                        You might feel like you are being really "organized" o
                      </li>
                      <li>
                        Nested navigation in UIs is a bad idea too, keep things
                        as flat as possible.
                      </li>
                      <li>
                        Nesting tons of folders in your source code is also not
                        helpful.
                      </li>
                    </ul>
                  </li>
                  <li>
                    List item two
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>
                        I'm not sure if we'll bother styling more than two
                        levels deep.
                      </li>
                      <li>
                        Two is already too much, three is guaranteed to be a bad
                        idea.
                      </li>
                      <li>
                        If you nest four levels deep you belong in prison.
                      </li>
                    </ul>
                  </li>
                  <li>
                    List item three
                    <ul className="ps-5 mt-2 space-y-1 list-disc list-inside">
                      <li>Again please don't nest lists if you want</li>
                      <li>Nobody wants to look at this.</li>
                      <li>
                        I'm upset that we even have to bother styling this.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
}

export default TestPrepRegistrationContent;

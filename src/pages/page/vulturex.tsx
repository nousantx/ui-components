import { styler } from "@styler";

const WebThreeApp = () => {
  styler();

  return (
    <div className="w-full bg-neutral-900 text-neutral-200 h-mn-100vh">
      <header className="w-full flex ai-center space-between p-2rem py-1rem relative">
        <h1 className="fs-1rem fw-500">VultureX</h1>
        <nav className="text-neutral-400 flex gap-1rem fs-12px">
          <a className="">Docs</a>
          <a className="">Feature</a>
          <a className="">Showcase</a>
        </nav>
      </header>
      <main className="w-mx-1440px mx-auto h-mn-100vh">
        <article className="flex flex-wrap ai-stretch jc-center h-100% max-lg:h-100% lg:h-80vh">
          <section className="flex-[1\_1\_400px] p-2rem flex ai-center">
            <header className=" tw-balance">
              <div className="center bg-gray-600 bg-opacity-0.3 w-[max-content] px-12px py-6px gap-4px br-1rem">
                <span className="ms-sharp fs-12px">lock_open</span>
                <span className="fs-12px">2024 Release</span>
              </div>

              <h1 className="fs-2.5em lh-1 mt-1rem fw-600">
                The Future of Fast and Modern{" "}
                <span className="text-gradient [--text-gradient]-[linear-gradient(63deg,var(--amber-600),var(--yellow-400))] fw-700">
                  React
                </span>{" "}
                Framework.
              </h1>

              <p className="mt-1rem fs-14px text-neutral-400">
                Fast, Modern, and Intuitive React Framework for Web Applications.
              </p>

              <div className="mt-1.5rem flex flex-wrap ai-center gap-8px">
                <button className="btn px-1rem h-35px br-4px fw-500 bg-neutral-200 text-neutral-900 hover:bg-neutral-400 tr-prop-[background-color] tr-time-0.3s">
                  Get Started
                </button>
                <div className="btn px-1rem h-35px br-4px fw-500 bg-neutral-800 text-neutral-200  bw-1px bs-solid bdr-neutral-600 center gap-8px">
                  <p className="family-code fs-12px">npm create vulturex</p>
                </div>
              </div>
            </header>
          </section>
          <section className="flex-[1\_1\_400px] p-1rem">
            <div className="w-full bg-[linear-gradient(63deg,var(--amber-600),var(--yellow-400))] br-4px br-bl-2rem p-2rem h-full text-neutral-800 center">
              <div className="bg-neutral-900 bg-opacity-0.8  br-1rem shadow-lg shadow-opacity-0.4">
                <div className="w-full bs-solid bw-0 bw-bottom-1px bdr-neutral-500 border-opacity-0.5 px-1.3rem flex ai-center gap-1.3rem">
                  <div className="flex ai-center gap-8px  ">
                    <div className="box-12px br-999px bg-red-500"></div>
                    <div className="box-12px br-999px bg-yellow-500"></div>
                    <div className="box-12px br-999px bg-green-500"></div>
                  </div>

                  <div className="family-code text-neutral-200 fs-12px p-1.3rem bdr-neutral-500 border-opacity-0.5 border br-top-6px bw-bottom-0 bg-red-700 bg-opacity-0.1">
                    index.vtx
                  </div>
                </div>

                <div className="w-full text-neutral-200 p-2rem">
                  <div className="family-code">
                    <p className="fs-14px">
                      <span className="text-amber-500">&lt;main</span>
                      <span className="text-yellow-500"> class</span>
                      <span className="text-gray-400">=</span>
                      <span className="text-lime-400">"tx-wrapper"</span>
                      <span className="text-amber-500">&gt;</span>
                    </p>
                    <p className="fs-14px my-8px pl-2ch">
                      <span className="text-amber-500">&lt;div&gt;</span>
                      Hello World!
                      <span className="text-amber-500">&lt;/div&gt;</span>
                    </p>
                    <p className="fs-14px">
                      <span className="text-amber-500">&lt;/main&gt;</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default WebThreeApp;

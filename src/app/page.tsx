import Image from "next/image";

const socials = [
  {
    name: "Github",
    url: "https://github.com/chombazm",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/chombazm/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/chombazm",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/dev.chomba/",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:px-40">
      <div className="z-10 w-full items-center justify-between font-mono text-sm flex fixed">
        <p className="flex justify-center lg:pl-40 dark:bg-zinc-800/30 dark:from-inherit lg:static w-auto  py-4  lg:dark:bg-zinc-800/30">
          @dev.chomba 🇿🇲
        </p>
        <div className="  items-end justify-center  from-white via-white dark:from-black dark:via-black static h-auto w-auto bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 lg:pr-40"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact me
          </a>
        </div>
      </div>

      <div className="w-full pt-[100px] lg:pt-40">
        <h1 className="text-5xl">
          My name is <span className="font-bold">Chomba</span>, <br /> A
          software engineer. <br />
        </h1>
        <p className="text-1xl mt-10 leading-[2] pb-4">
          Currently working with great minds and building viable solutions that{" "}
          <br />
          change the world at{" "}
          <a
            href="https://bongohive.co.zm/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            BongoHive
          </a>{" "}
          and building a startup called{" "}
          <a
            href="https://www.giglr.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Giglr
          </a>{" "}
          <br />
          Previously Head of Technology at{" "}
          <a
            href="https://lendbox.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Lendbox
          </a>{" "}
          .
          <br />
          Former software engineer at{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Spark&Spur
          </a>{" "}
          . and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Kezo
          </a>
          ,
        </p>

        <p>
          I listen to a lot of{" "}
          <a href="https://open.spotify.com/user/s363ssbbtu0jz6zuqad6xof8g">
            music
          </a>{" "}
          and{" "}
          <a className="font-bold underline" href="https://syntax.fm/">
            podcasts
          </a>{" "}
          and I love{" "}
          <a
            className="font-bold underline"
            href="https://www.instagram.com/dev.chomba/"
          >
            DIY
          </a>{" "}
          and{" "}
          <a
            className="font-bold underline"
            href="https://www.instagram.com/dev.chomba/"
          >
            take photos
          </a>
          .
        </p>
        {/* <span className="font-bold text-xs">
          Read more about me <a href="/about">here</a>.
        </span>{" "} */}
      </div>

      <div className="mb-0  flex gap-2 fixed bottom-0 w-full z-20 lg:pl-40">
        {socials.map((social) => (
          <a
            href={social.url}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors flex-.5"
            target="_blank"
            key={social.url}
            rel="noopener noreferrer"
          >
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {social.name}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}

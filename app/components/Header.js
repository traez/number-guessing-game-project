import Image from "next/image";

export default function Header() {
  return (
    <header>
      <h1>Number Guessing Game</h1>
      <Image
        src="/images/machine-man.png"
        alt=""
        width={200}
        height={110}
        id="machine-man"
      />
      <h2>
        The computer has chosen a random number between 1 and 99 inclusive
      </h2>
      <h3>
        Are you smarter than AI? You have 7 attempts to guess right and prove
        so.
      </h3>
    </header>
  );
}

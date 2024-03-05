import Image from "next/image";

export default function Home() {
  const backgroundStyle = {
    backgroundImage: 'url("./loginBackground.svg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  return (
    <main style={backgroundStyle}>
      <div className="pt-6 pl-6">
        <Image src={"hamburg.svg"} width={30} height={30} alt="Hamburg" />
      </div>
    </main>
  );
}

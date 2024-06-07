import Card from "./components/Card";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-4 items-center justify-center mx-4">
      <Header />
      <Card />
    </main>
  );
}

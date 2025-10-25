import { CardTechnologies } from "@/components/CardTechnologies";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center font-sans p-8 bg-yellow-50">
      <h1 className="py-8 px-16 bg-blue-100">Technical Documentation Site</h1>
      <div className="flex flex-col gap-4 mt-auto bg-red-100 py-4 px-16">
        <CardTechnologies />
        <CardTechnologies />
      </div>
    </div>
  );
}

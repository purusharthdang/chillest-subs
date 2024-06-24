import MagazineListItem from "@/components/MagazineListItem";
import { fakeMagazineData } from "@/constants/FakeData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const handleListDownload = () => {
    const pageHTML = document?.querySelector(".download-material")?.outerHTML ?? '';
    const blob = new Blob([pageHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const tempEl = document.createElement("a");
    document.body.appendChild(tempEl);
    tempEl.href = url;
    tempEl.download = "MagazineList.html";
    tempEl.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
      tempEl?.parentNode?.removeChild(tempEl);
    }, 2000);
  }
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 gap-2 ${inter.className}`}
    >
      <h1>Magazines with deadlines next week (from next Monday to next Sunday)</h1>
      <button className="cursor-pointer p-2 shadow bg-slate-700 rounded-md" onClick={handleListDownload}>Download List</button>
      {/* Below is hidden, and only visible in MagazineList.html file */}
      <div className="hidden download-material">
        <h1>Last Chance to Submit</h1>
        {fakeMagazineData.map((magazine) => (<MagazineListItem {...magazine} key={magazine.key} />))}
        </div>
    </main>
  );
}

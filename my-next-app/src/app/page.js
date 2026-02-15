import { Button } from "@/components/ui/button";
import { ArrowUpIcon } from "lucide-react";
import Headers from "@/components/layouts/headers.jsx";
import Main from "@/components/layouts/main.jsx";

export default function Home() {
  return (
    <>
      <Headers />
      <Main/>
      {/* <h1 className="text-3xl font-bold underline">This is HomePage</h1 >
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button> */}
    </>
  );
}


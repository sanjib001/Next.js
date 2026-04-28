// import { Button } from "@/components/ui/button";
// import { ArrowUpIcon } from "lucide-react";
// import Headers from "@/components/layouts/headers.jsx";
// import Main from "@/components/layouts/main.jsx";
// import Footer from "@/components/layouts/footer";

// export default function Home() {
//   return (
//     <>
//       <Headers />
//       <Main/>
//       <Footer/>
//     </>
//   );
// }

export default function Home() {
  return (
    <div style={{
      padding: "80px 20px",
      textAlign: "center",
      fontFamily: "system-ui, sans-serif",
      minHeight: "100vh",
      background: "#f8f9fa"
    }}>
      <h1 style={{ fontSize: "3.5rem", marginBottom: "16px" }}>
        🎉 Deployment Successful!
      </h1>
      <p style={{ fontSize: "1.6rem", color: "#333" }}>
        Your Next.js app is now live on Vercel.
      </p>
    </div>
  );
}
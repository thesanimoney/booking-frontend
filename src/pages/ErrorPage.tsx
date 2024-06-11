import '../index.css'
import Error from "@/components/error";

export default function ErrorPage() {
    return <>
      <div className="min-h-screen text-center flex justify-center items-center">
          <Error/>
      </div>
    </>
}

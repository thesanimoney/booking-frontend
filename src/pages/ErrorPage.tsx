import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div id="error-page" className="flex flex-col gap-2 items-center text-center">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred. <i>
                    {(error as Error)?.message ||
                        (error as { statusText?: string })?.statusText}
                </i></p>
                <Link className="underline" to="/">Back to home</Link>
            </div>
        </div>
    );
}

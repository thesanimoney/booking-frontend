import {Link, useRouteError} from "react-router-dom";
import styles from './error.module.css'

export default function Error() {
    const error = useRouteError();
    return (
        <div id="error-page" className={styles.container}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred. <i>
                {(error as Error)?.message ||
                    (error as { statusText?: string })?.statusText}
            </i></p>
            <Link className="underline" to="/">Back to home</Link>
        </div>
    );
}
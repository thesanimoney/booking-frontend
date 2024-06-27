import getPosts from "@/hooks/posts/getPosts.ts";

interface PostsLoader {
    request: {
        url: string
    }
}

function postsLoader ({request}: PostsLoader) {
    const queryParams = request.url.split('?')[1];
    return getPosts(queryParams);
}

export default postsLoader;
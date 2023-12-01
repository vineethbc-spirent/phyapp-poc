export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: Request) {
    const res = await fetch('http://10.14.19.16:1003/', {
        headers: {
            'Content-Type': 'application/json',
        },
        body: `[
                -1,
                "get_hw_info"
            ]`,
        method: "POST"
    });
    const data = await res.json();
    return Response.json({ data });
}
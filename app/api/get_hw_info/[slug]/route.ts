export const dynamic = 'force-dynamic' // defaults to force-static


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const res = await fetch('http://10.14.19.16:1003/', {
      headers: {
        'Content-Type': 'application/json',
      },
      body: `[
                  ${slug},
                  "get_hw_info"
              ]`,
      method: "POST"
    });
    const data = await res.json();
    return Response.json({ data });
  } catch (e) {
    console.log(e);
    return Response.json({ data : 'No Data found' });
  }
}
export const dynamic = 'force-dynamic'; // defaults to force-static

export interface SantaGroups {
  groups: [][];
}
export async function GET(request: Request): Promise<Response> {
  console.log('GET /api/santabot/people');
  // console.log('request', request);

  return new Response(JSON.stringify({ test: 'TEST' }), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}

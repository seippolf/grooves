export type Albums = string[];


export async function getAlbums(): Promise<Albums> {
    
    // Update this to SQL query, sorted by rating (best first)
    const dummy = [
        '54gexkFvg7FE3JcbntQViI',
        '05tJhGl52X4zGe0ySlcBk6',
        '58HZZpS0wxJKwGjoerg0mk',
        '2OMdsA2I4RxrHCyogwKGvF',
        '64SL0QEXxulD2QgwJmJbUL'
    ]

    return dummy;
}

export async function GET(request: Request) {

    const response = await getAlbums();
    return new Response(JSON.stringify(response));

}
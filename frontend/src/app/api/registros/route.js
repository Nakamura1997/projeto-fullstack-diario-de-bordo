export async function POST(request) {
    const data = await request.json();
    
    // Simula um delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return Response.json({
      ...data,
      id: Date.now(),
      createdAt: new Date().toISOString()
    });
  }
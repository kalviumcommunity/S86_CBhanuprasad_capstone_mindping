export function GET() {
  return new Response(
    JSON.stringify({
      success: true,
      message: "GET API is working",
      tasks: [
        { id: 1, title: "Create GET API" },
        { id: 2, title: "Submit assignment" }
      ]
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}

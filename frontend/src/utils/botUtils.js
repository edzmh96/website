const intentMessageMap = {
    NameIntent: "My Name is Edward Zhou (周沐华). Nice to meet you!",
    WorkIntent: "I've worked as an android developer (Pantoscope Media), full stack developer (SAP), teaching assistant (UBC) and software engineer (Pinterest)",
    HobbyIntent: "I enjoy working out, playing volleyball and occasionally gaming.",
    Error: "You're sending too many requests! Please try again in a few seconds.",
    HelloIntent: "Hello!",
    HowAreYouIntent: "I'm good! Hope you're doing well as well.",
}

export const getReplyFromIntent = (intent) =>
    intentMessageMap[intent] ? intentMessageMap[intent] : "I see."
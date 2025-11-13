# Learning Journey Reflection Notes

## Tools Used:
- Cursor AI
- Claude Code
- Voiceflow

## Workflow:

Inspired by Peter Yang's [Build an AI Headshot App in 15 Minutes (Google Nano Banana) Tutorial](https://youtu.be/-SenpOqT6Nk?si=GkO2pMzEBkboUsxl)

1: Prompt AI to create spec.md for the app. Include in the prompt specific technologies (if there are preferences), the milestones for building the app and expected milestone scope. 

2: Review the generated spec.md file contents. Remove anything that is unnecessary. Change/Add anything else to align with expectation.

3: Prompt AI to build milestone 1.

4: Test the working prototype software. Prompt AI to fix or change anything until satisfied.

5: Prompt AI to build the next milestone, fix/change along the way until the full scope implementation is working as expected.

6: When satisfied and before storing the app away, prompt AI to create instructions for someone to run the app: first-time user who has downloaded the source code and user who had succeesfully run the app once and is returning to run the app.

## Key Takeaways:

- Always create the spec first. Can be done manually or have AI to do it. If AI does it, always review and adjust the generated spec contents before building.
- Think about building the software in testable iterations, i.e. where it's possible to verify visually and/or behaviourially the new implemented change. For UI-facing software, a good first iteration scope is to build the UI without underlying backend logic implementation. 
- Specify the build iterations and scope when creating the spec.
- If Tailwind CSS (latest version) doesn't work, use Tailwind CSS v3 (Nov 2025).
- Ask AI to write "getting-started" instructions to help people to run the app, including yourself.
- Ask AI to explain the source code, as a way of learning new technologies. 

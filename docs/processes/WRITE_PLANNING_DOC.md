# Project Management Practices

This is a guide for writing plans/project management `.md` files, e.g. `documentation/planning/yyMMdda_complex_project.md`. These are for thinking through & documenting decisions, breaking down complex projects into multiple stages, and tracking progress.

Aim to keep these concise, but emphasise & clearly capture all the decisions, responses, and requirements from the user.

If you're starting the doc from scratch, store it in `documentation/planning/upcoming/`, and first ask the user questions about their project requirements to clarify key decisions. (Use MCP or run `date +"%y%m%d"` command first to get the current date for naming the file)

**Planning Document Lifecycle:**
- **New docs start in `/upcoming/`** - for initial planning and requirements gathering
- **Move to `/current/`** when active development begins
- **Move to `/completed/`** when implementation is finished and delivered

see also: `documentation/processes/WRITE_EVERGREEN_DOC.md` for instructions on writing evergreen docs


## File naming conventions

Planning docs should follow this naming format: `yyMMdd[letter]_description_in_normal_case.md`

- Date prefix: `yyMMdd` format (e.g., `250526` for 26 May 2025)
- Auto-incrementing letter: append a letter (a, b, c...) based on creation order within the same day
  - First doc created on a given day gets `a`
  - Second doc gets `b`, and so on
  - This ensures files sort alphanumerically by creation date
  - Sometimes we might end up with multiple docs with the same day and letter (e.g. `250526a`, e.g if multiple agents were working simultaneously in separate Git worktrees) - don't worry if this happens
- Description: Use lowercase words separated by underscores
  - Exception: Keep proper capitalisation for acronyms like `ToC` (Table of Contents)
  - Example: `250526a_ToC_hierarchical_summary_tooltips.md`

Update this doc regularly to keep the actions up-to-date. When you change it, make minimal, focused changes, based on new user input.

**Document Status Management:**
- Update the document location as work progresses through the lifecycle
- When moving from `/upcoming/` to `/current/`, add current date and status update
- When moving from `/current/` to `/completed/`, mark completion date and final status
- Update cross-references in other documents when moving locations


## Document structure

Don't include a `Date` section at the top since it's implicit from the filename.


### Goal, context

- Clear problem/goal statement(s) at top, plus enough context/background to pick up where we left off
- If the goal is complex, break things down in detail about the desired behaviour.


### References

- Mention relevant evergreen docs (in `documentation/reference/`), other planning docs (in `documentation/planning/current/`, `/upcoming/`, or `/completed/`), code files/functions, links, or anything else that could provide context, with a 1-sentence summary for each of what it's about/why it's relevant


### Principles, key decisions

- Include any specific principles/approaches or decisions that have been explicitly agreed with the user (over and above existing project rules, examples, best practices, etc).
- As you get new information from the user, update this doc so it's always up-to-date.


### Technical architecture

For complex features involving new data models, APIs, or integrations:
- Include database schema with key design decisions documented
- Define API endpoints with example request/response formats
- Document integration points with existing systems (auth, permissions, etc.)
- Describe component architecture and data flow for frontend features
- Document technical alternatives considered and rationale for chosen approach
- Include error handling strategies for key failure scenarios

### External integrations

If the feature integrates with external services, APIs, or third-party providers:
- Document provider capabilities and limitations
- Plan for provider-specific configuration
- Include fallback strategies for service unavailability
- Consider rate limiting, costs, and usage monitoring
- Document authentication and security considerations

### Configuration management

For features requiring new configuration:
- Document required environment variables
- Plan feature flags or toggles if needed
- Consider per-company or per-user configuration options
- Include deployment and staging considerations

### User experience planning

For user-facing features:
- Plan loading states and user feedback mechanisms
- Design error message strategies and user guidance
- Consider accessibility and responsive design requirements
- Plan tooltips, help text, and onboarding flows
- Document interaction patterns and visual feedback

### Actions

- Break into numbered phases. Start with a really simple working v1, and gradually layer in complexity, ending each phase with passing tests and working code.
- List actions in the order that they should be tackled
- Use the format: `### Phase 1: Description of this phase`
- Don't renumber phases when moving them around - add new phases as needed
- Use `[ ]` and `[x]` checkboxes to indicate todo/done.
- Include subtasks with clear acceptance criteria
- Refer to specific docs, files/functions, examples, links, etc, so it's clear exactly what needs to be done
- Explicitly add tasks for writing automated tests, usually before writing code. (Perhaps one or two end-to-end tests first, then gradually adding more detailed tests as complexity grows). Explicitly add tasks for running the automated tests before ending each stage.
- If there are actions that the user needs to do, add those in too, so we can track progress and remind the user.
- If this is a major piece of work, ask the user whether we should have an early action to create a `yyMMdd[letter]_complex_project` Git branch (and move over any changes). If so, then add a final action to merge that back into `main`.
- Add actions to update the planning doc with progress so far at the end of every phase
- Add actions to Git commit (perhaps at the end of every phase, perhaps use a subagent) - follow instructions in `documentation/processes/GIT_COMMITS.md`
- Add actions to stop & review with user where appropriate, e.g. when we get to a good stopping point, to manually check changes to the user interface, etc
- Add actions to search the web where appropriate, e.g. when debugging, determining best practices, making use of 3rd-party libraries, etc
- Add actions to update relevant `documentation/reference/*.md` evergreen docs (see `documentation/processes/WRITE_EVERGREEN_DOC.md`). 
- If you think we need a new evergreen-doc, ask the user
- Explicitly say to use subagents for encapsulated tasks or where the task will create a lot of verbose content, e.g. checking for errors or browser console output with Playwright MCP, doing research
- Add a final action to move the doc to `documentation/planning/completed/` and commit.
- Ask me three clarifying questions that are not mentally taxing to help you understand the assumptions and my thinking.

Example action (no need to include the words `TODO` or `DONE` explicitly, since the `[ ]` todo-checkboxes capture that):

```
### Phase 1: High-level description of this phase
- [ ] This is a top-level action description line
  - [ ] It can have sub-points that get ticked off
    - You can add bulletpoint notes with extra detail/context to help plan & shape future actions

### Phase 2: Another major phase
- ✅ This phase has already been completed
  - ✅ This step has already been completed
    - 📔 You could journal about useful/unexpected discoveries when you update progress on completed tasks
  - ❌ This step has been skipped
```

# Appendix

Add any other important context here, including:

**Technical Details:**
- Complete database schemas with field explanations
- API request/response format examples
- Configuration examples and environment setup
- Integration code snippets and patterns

**Implementation Context:**
- Summary of web searching and research
- Example data and test scenarios
- Relevant tests and validation approaches
- Rich background, quotes, and context from user conversations

**Decision Documentation:**
- Alternative approaches that were considered but discarded
- Technical trade-offs and rationale for chosen solutions
- Provider comparisons or technology choices
- Performance, security, or scalability considerations

**User Requirements:**
- Detailed user stories or scenarios
- Workflow diagrams or user journey maps
- Business rules and validation requirements